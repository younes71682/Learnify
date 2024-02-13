
import Image from 'next/image'
import { Controller, useFormContext } from 'react-hook-form'
import React, { useState } from 'react';
import Select from 'react-select';


type Props = {
    state: string,
    city: string
}

type Selected = {
    id: number,
    value: string,
    label: string,
}


const Location = (props: Props) => {

    const { state, city } = props


    const array_state: Selected[] = [
        { id: 1, value: "tehran", label: "تهران" },
        { id: 2, value: "mashhad", label: "مشهد" },
        { id: 3, value: "esfahan", label: "اصفهان" },
        { id: 4, value: "iran", label: "ایران" },
    ]


    const array_city: Selected[] = [
        { id: 1, value: "tehran", label: "تهران" },
        { id: 2, value: "shahriar", label: "شهریار" },
        { id: 3, value: "varamin", label: "ورامین" },
        { id: 4, value: "parand", label: "پرند" },
        { id: 5, value: "gharchak", label: "قرچک" },
    ]


    const [isSearchable, setIsSearchable] = React.useState(false);
    const [isRtl, setIsRtl] = React.useState(true);
    const [selectstatevalue, setSelectStateValue] = useState<any>(array_state.find((i) => i.value === state) || null)
    const [selectcityvalue, setSelectCityValue] = useState<any>(array_city.find((i) => i.value === city) || null)

    const form = useFormContext()
    const { control, formState } = form
    const { errors } = formState

    return (
        <div className='flex flex-col w-[28%] h-full pt-4 pb-2 pr-4 gap-3 rounded-[15px] shadow-[0_0_20px_rgba(0,0,0,0.05)]'>
            <div className='flex items-center gap-1 text-lg'>
                <Image src='/icon/user/account/info_user/location.svg' alt='icon' width={24} height={24} />
                <h2>محل سکونت</h2>
            </div>
            <div className='flex flex-col gap-1 '>

                <div className='flex flex-col gap-1 h-[71px]'>
                    <div>
                        <Controller
                            render={({ field }) =>
                                <Select
                                    {...field}

                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            // borderColor: state.isFocused ? '#008000' : '#AAAAAA',
                                            height: "48px",
                                            borderRadius: "10px",
                                        }),
                                    }}


                                    className="w-[60%] "
                                    classNamePrefix="state"
                                    // defaultValue={state[0]}
                                    isRtl={isRtl}
                                    isSearchable={isSearchable}
                                    name="state"
                                    options={array_state}
                                    onChange={(selectedOption) => {
                                        setSelectStateValue(selectedOption)
                                        field.onChange(selectedOption.value)
                                    }}
                                    value={selectstatevalue}

                                    placeholder={'استان'}

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
                            name="state"
                            control={control}
                            rules={{
                                required: true
                            }}
                            defaultValue={selectstatevalue?.value}
                        />
                    </div>

                    <div>
                        {errors.state?.type === "required" && <p className="text-red-500 font-normal text-xs">استان خود را مشخص کنید</p>}
                    </div>
                </div>


                <div className='flex flex-col gap-1 h-[71px]'>

                    <div>
                        <Controller
                            render={({ field }) =>

                                <Select
                                    {...field}
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            // borderColor: state.isFocused ? '#008000' : '#AAAAAA',
                                            height: "48px",
                                            borderRadius: "10px",
                                        }),
                                    }}


                                    className="w-[60%] "
                                    // classNamePrefix="state"
                                    // defaultValue={state[0]}
                                    isRtl={isRtl}
                                    isSearchable={isSearchable}
                                    name="city"
                                    options={array_city}
                                    onChange={(selectedOption) => {
                                        setSelectCityValue(selectedOption)
                                        field.onChange(selectedOption.value)
                                    }}
                                    value={selectcityvalue}
                                    placeholder={'شهر'}

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
                            name='city'
                            control={control}
                            rules={{
                                required: true
                            }}
                            defaultValue={selectcityvalue?.value}
                        />
                    </div>

                    <div>
                        {errors.city?.type === "required" && <p className="text-red-500 font-normal text-xs">شهر خود را مشخص کنید</p>}
                    </div>

                </div>


            </div>
        </div >
    )
}

export default Location







// <option value="DE">آذربایجان شرقی</option>
// <option value="DE">آذربایجان غربی</option>
// <option value="DE">اردبیل</option>
// <option value="DE">اصفهان</option>
// <option value="DE">البرز</option>
// <option value="DE">ایلام</option>
// <option value="DE">بوشهر</option>
// <option value="DE">تهران</option>
// <option value="DE">چهارمحال و بختیاری</option>
// <option value="DE">خراسان جنوبی</option>
// <option value="DE">خراسان رضوی</option>
// <option value="DE">خراسان شمالی</option>
// <option value="DE">خوزستان</option>
// <option value="DE">زنجان</option>
// <option value="DE">سمنان</option>
// <option value="DE">سیستان و بلوچستان</option>
// <option value="DE">فارس</option>
// <option value="DE">قزوین</option>
// <option value="DE">قم</option>
// <option value="DE">کردستان</option>
// <option value="DE">کرمان</option>
// <option value="DE">کرمانشاه</option>
// <option value="DE">کهگیلویه و بویراحمد</option>
// <option value="DE">گلستان</option>
// <option value="DE">گیلان</option>
// <option value="DE">لرستان</option>
// <option value="DE">مازندران</option>
// <option value="DE">مرکزی</option>
// <option value="DE">هرمزگان</option>
// <option value="DE">همدان</option>
// <option value="DE">یزد</option>