
import React from 'react';
import Select from 'react-select';
const Select_gender = () => {

    const options = [
      { value: 'man', label: 'مرد' },
      { value: 'woman', label: 'زن' },
      { value: 'nodesir', label: 'تمایلی ندارم' },
    ];
  const [gender, setGender] = React.useState("");

 

  return (
    <div>

<label>ddd</label>
<Select options={ options} defaultValue={"جنسیت"} />

     </div>
  );
}

export default Select_gender