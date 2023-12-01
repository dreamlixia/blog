/**
 * 应用组件：动态表单内嵌下拉框
 * 业务场景：某类型两个，不同类型为互斥关系
 *  1. 同类型未选择完可继续添加表单项，已选择完不可继续添加；
 *  2. 添加时，已选择的下拉项和不同类型的下拉项置灰；
 *  3. 修改时，以第一个表单项为准，清空以下已选择的值及其他联动项；
 *  4. 每个类型中的每种只能选择一次；
 * 
 * 方法：differenceArrayFunction 为判断两个数组是否一致的函数，返回不一致的部分。
 */

import React from 'react';
import { ArrayField, TextArea, Form, Button, useFormState, Icon } from 'xxxx-ui';

class ArrayFieldDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { name: 'xxxx D2C', role: 'Engineer' },
                { name: 'xxxx C2D', role: 'Designer' },
            ]
        };
    }

    render() {
        let { data } = this.state;
        const ComponentUsingFormState = () => {
            const formState = useFormState();
            return (
                <TextArea style={{ marginTop: 10 }} value={JSON.stringify(formState)} />
            );
        };
        return (
            <Form style={{ width: 800 }} labelPosition='left' labelWidth='100px' allowEmpty>
                <ArrayField field='rules' initValue={data}>
                    {({ add, arrayFields, addWithInitValue }) => (
                        <React.Fragment>
                            <Button onClick={add} icon={<Icon />} theme='light'
                                disabled={(function () {
                                    const typeList = formApi?.getValue?.('typeList') || [];
                                    const type = initOptionList.find(
                                        (fItem) => fItem.value === typeList?.[0]?.valType,
                                        )?.type;
                                    const sameTypeList = initOptionList
                                        .filter((sItem) => sItem.type === type)
                                        .map((mItem) => mItem.value);
                                    const selectedValue = typeList.map(
                                        (bmItem) => bmItem?.valType,
                                        );
                                    if (differenceArrayFunction(sameTypeList, selectedValue).length === 0) {
                                        return true;
                                    }
                                        return false;
                                })()}
                            >Add new line</Button>
                            <Button icon={<Icon />} onClick={() => {addWithInitValue({ name: 'xxxx DSM', type: 'Designer' });}} style={{ marginLeft: 8 }}>Add new line with init value</Button>
                            {
                                arrayFields.map(({ field, key, remove }, i) => (
                                    <div key={key} style={{ width: 1000, display: 'flex' }}>
                                        <Form.Select
                                            field={`${field}[role]`}
                                            label={`${field}.role`}
                                            style={{ width: 120 }}
                                            // optionList={[
                                            //     { label: 'Engineer', value: 'Engineer' },
                                            //     { label: 'Designer', value: 'Designer' },
                                            // ]}
                                            optionList={
                                                i === 0
                                                  ? initOptionList
                                                  : initOptionList.map((item) => {
                                                      // 基准项
                                                      const baseItem = initOptionList.find(
                                                        (i1) => i1.value === typeList?.[0]?.valType,
                                                      );
                                                      const sameTypeList = initOptionList
                                                        .filter((fItem) => fItem.type === baseItem?.type)
                                                        .map((mItem) => mItem.value);
                                                      const selectedValue = typeList?.map(
                                                        (sItem) => sItem?.valType,
                                                      );
                                                      /**
                                                       * item.type !== baseItem?.type 判断不同类型置灰
                                                       * item?.value === baseItem?.value 判断已选值置灰
                                                       * differenceArrayFunction(sameTypeList, selectedValue).length === 0 
                                                       *    判断同类型已选择完，全部置灰（用于添加第二项后不填入值，继续添加类型n次，之后再任一项选择且同类型已经选择完的情况下置灰其他还未填入值的optionList）；
                                                       */
                                                      return {
                                                        ...item,
                                                        disabled:
                                                          item.type !== baseItem?.type ||
                                                          item?.value === baseItem?.value ||
                                                          differenceArrayFunction(sameTypeList, selectedValue).length === 0,
                                                      };
                                                    })
                                              }
                                              onChange={(val) => {
                                                // 当选项中没有某一项 && 之前选择过某一项 时，清除掉该下的项值；
                                                if (
                                                  !typeList?.map(
                                                    (item) => item?.valType,
                                                  )?.includes(TypeEnum.types1)
                                                ) {
                                                  setType1Date(undefined);
                                                }
                  
                                                if (i === 0) {
                                                  // currentValType： 当前选择的val归属某类型； currentTypeValue： 获取到的是上次的归属类型(在此 onChange 方法内属于异步，获取到上次的结果)
                                                  const currentValType = initOptionList?.find(
                                                    (item) => item?.value === val,
                                                  )?.type;
                                                  // 判断切换到的类型为某类型 && 为不同类型时，清空上一次联动项的结果list，如有。
                                                  if (
                                                    currentTypeValue !== undefined &&
                                                    currentTypeValue !== currentValType
                                                  ) {
                                                    if (currentValType === GroupType.bigType1) {
                                                      // 清空
                                                    } else if (currentValType === GroupType.bigType2) {
                                                      const _formApi = formRef?.current?.formApi;
                                                      _formApi?.setValue('xxxfield', undefined);
                                                    }
                                                  }
                  
                                                  arrayFields.forEach((arrayItem, arrayIndex) => {
                                                    // 当修改基准值（第一项），则清空后续项（只能支持同类型仅包含两种类型的场景有效）
                                                    // if (arrayIndex !== 0) {
                                                    //   formApi?.setValue(`typeList[${arrayIndex}][valType]`, undefined);
                                                    // }
                                                    // 当基准值类型与当前所选值类型不一致时，或 当前所选值在已选值中存在时，则清空
                                                    if (
                                                      currentTypeValue !== currentValType ||
                                                      typeList?.map(
                                                        (item) => item?.valType,
                                                      )?.includes(val)
                                                    ) {
                                                      // 在某类型表单作为一个整体引入的形式不会清空项，会带着值渲染到修改的第一项
                                                      formApi?.setValue(`typeList[${arrayIndex}][valType]`, undefined);
                                                    }
                                                  });
                                                }
                                              }}
                                        >
                                        </Form.Select>
                                        <Button
                                            type='danger'
                                            theme='borderless'
                                            icon={<Icon />}
                                            onClick={remove}
                                            style={{ margin: 12 }}
                                        />
                                    </div>
                                ))
                            }
                        </React.Fragment>
                    )}
                </ArrayField>
                <ComponentUsingFormState />
            </Form>
        );
    }
}