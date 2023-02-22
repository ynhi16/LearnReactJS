import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
  valueType: PropTypes.object,
};
TodoForm.defaultProps = {
  onSubmit: null,
  valueType: {},
};

function TodoForm(props) {
  const { onSubmit, valueType } = props;
  //const [formValue, setformValue] = useState({});
  const [value, setValue] = useState('');

  function handleValueChange(e) {
    // console.log(e.target.value);
    setValue(e.target.value);
  }
  function handleTodoForm(e) {
    e.preventDefault();
    if (!onSubmit) return;

    const formValue = {
      id: valueType.id,
      title: value,
    };
    onSubmit(formValue);
    setValue('');

    for (const key in valueType) {
      console.log(valueType[key]);
      delete valueType[key];
    }
    console.log('valueType', valueType);
  }

  useEffect(() => {
    if (valueType.title) {
      const newValueType = { ...valueType };
      setValue(newValueType.title);
      // setValue({ ...valueType.title });
    }
  }, [valueType]);

  return (
    <form onSubmit={handleTodoForm}>
      <p>Thêm mới:</p>
      <input type="text" value={value} onChange={handleValueChange} />
      <button type="button">Save</button>
    </form>
  );
}

export default TodoForm;
