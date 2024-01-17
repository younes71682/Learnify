import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';


const Select_gender = () => {

  const gender = [
    { id: 1, value: "Male", label: "مرد" },
    { id: 2, value: "Female", label: "زن" },
    { id: 3, value: "", label: "تمایلی ندارم" },
  ]

  const [isSearchable, setIsSearchable] = React.useState(false);
  const [isRtl, setIsRtl] = React.useState(true);

  const form = useFormContext();
  const { control, formState } = form;
  const { errors } = formState
  return (
    <div className='flex flex-col gap-1 h-[71px] ml-4'>
      <div>
        <Controller
          render={({ field }) =>

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
              // defaultValue={state[0]}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="gender"
              options={gender}
              placeholder={'جنسیت'}

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
          }
          name='gender'
          control={control}
          rules={{
            required: true,
      
          }}
        />
      </div>

      <div>
        {errors.gender && <p className='text-red-500 font-normal text-xs'>جنسیت خود را مشخص کنید</p>}
      </div>

    </div>
  );
};

export default Select_gender;
