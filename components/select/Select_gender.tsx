import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';

type Selected = {
  id: number,
  value: string,
  label: string,
}

type Props = {
  gender: string
}

const Select_gender = (props: Props) => {
  const { gender } = props;

  const array_gendery: Selected[] = [
    { id: 1, value: 'male', label: "مرد" },
    { id: 2, value: 'female', label: "زن" },
    { id: 3, value: 'dont prefer', label: "تمایلی ندارم" },
  ]

  const [isSearchable, setIsSearchable] = React.useState(false);
  const [isRtl, setIsRtl] = React.useState(true);
  const [selectedValue, setSelectedValue] = useState<any>(array_gendery.find(item => item.value === gender) || null);
  // console.log('selectedValue', selectedValue)
  const form = useFormContext();
  const { control, formState } = form;
  const { errors } = formState;

  return (
    <div className='flex flex-col gap-1 h-[71px] ml-4'>
      <div>
        <Controller
          render={({ field }) => (
            <Select
              {...field}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  // borderColor: state.isFocused ? '#008000' : '#AAAAAA',
                  width: "210px",
                  height: "48px",
                  borderRadius: "10px",
                }),
              }}
              className=""
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="array_gendery"
              options={array_gendery}
              placeholder={'جنسیت'}
              onChange={(selectedOption) => {
                setSelectedValue(selectedOption);
                field.onChange(selectedOption.value);
              }}
              value={selectedValue}
              theme={(theme) => ({
                ...theme,
                borderRadius: 7,
                colors: {
                  ...theme.colors,
                  primary25: '#dcfce7',
                  primary: '#008000',
                },
              })}
            />
          )}
          name='gender'
          control={control}
          rules={{
            required: true,
          }}
          defaultValue={selectedValue.value}
        />
      </div>
      <div>
        {errors.gender && <p className='text-red-500 font-normal text-xs'>جنسیت خود را مشخص کنید</p>}
      </div>
    </div>
  );
};

export default Select_gender;



// import React, { useState } from 'react';
// import { Controller, useFormContext } from 'react-hook-form';
// import Select from 'react-select';

// type Selected = {
//   id: number,
//   value: string,
//   label: string,
// }

// type Props = {
//   gender: string
// }

// const Select_gender = (props: Props) => {

//   const { gender } = props
//   console.log(gender)

//   const gendery: Selected[] = [
//     { id: 1, value: gender, label: "مرد" },
//     { id: 2, value: gender, label: "زن" },
//     { id: 3, value: gender, label: "تمایلی ندارم" },
//   ]

//   const [isSearchable, setIsSearchable] = React.useState(false);
//   const [isRtl, setIsRtl] = React.useState(true);
//   const [selectedValue, setSelectedValue] = useState<any>();

//   const form = useFormContext();
//   const { control, formState } = form;
//   const { errors } = formState

//   return (
//     <div className='flex flex-col gap-1 h-[71px] ml-4'>
//       <div>
//         <Controller
//           render={({ field }) =>

//             <Select
//               {...field}
//               styles={{
//                 control: (baseStyles, state) => ({
//                   ...baseStyles,
//                   // borderColor: state.isFocused ? '#008000' : '#AAAAAA',
//                   width: "210px",
//                   height: "48px",
//                   borderRadius: "10px",

//                 }),
//               }}

//               className=""
//               defaultValue={gendery}
//               isRtl={isRtl}
//               isSearchable={isSearchable}
//               name="gendery"
//               options={gendery}
//               placeholder={'جنسیت'}
//               onChange={(selectedOption) => {
//                 setSelectedValue(selectedOption);
//                 field.onChange(selectedOption.value);
//               }}
//               value={selectedValue}





//               theme={(theme) => ({
//                 ...theme,
//                 borderRadius: 7,

//                 colors: {
//                   ...theme.colors,
//                   primary25: '#dcfce7',
//                   primary: '#008000',
//                 },

//               })}
//             />
//           }
//           name='gender'
//           control={control}
//           rules={{
//             required: true,

//           }}
//         />
//       </div>

//       <div>
//         {errors.gender && <p className='text-red-500 font-normal text-xs'>جنسیت خود را مشخص کنید</p>}
//       </div>

//     </div>
//   );
// };

// export default Select_gender;
