import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import gregorian from "react-date-object/calendars/gregorian";
import "react-multi-date-picker/styles/colors/green.css";
import { Controller, useFormContext } from "react-hook-form";




const Birthday = () => {
    const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
    const [value, setValue] = useState(new DateObject());

    const  date  = value.convert(gregorian, gregorian_en);
    const dataFormat = date.format('YYYY-MM-DD')
    
    // console.log('v',value);
    // console.log(date);
    console.log(dataFormat);

    const formdata = useFormContext()
    const { control, formState } = formdata
    const { errors } = formState
    return (
        <div className="flex flex-col gap-1 h-[71px] ml-4">
            <div>
                <Controller
                    render={({ field }) =>
                        <DatePicker
                            {...field}
                            placeholder="*تاریخ تولد"
                            style={{ height: '48px', cursor: 'pointer', textAlign: "right", width: "210px", borderRadius: "10px", padding: '0 8px 0 0', border: "1px solid #008000", }}
                            inputClass=""
                            value={value}
                            // @ts-ignore
                            onChange={setValue}
                            locale={persian_fa}
                            calendar={persian}
                            weekDays={weekDays}
                            className="green"

                        />
                    }
                    name="birthday"
                    control={control}
                    rules={{
                        required: true
                    }}
                    
                defaultValue={dataFormat}
                />
            </div>

            <div>
                {errors.bithday && <p className="text-red-500 font-normal text-xs">تاریخ تولد خود را مشخص کنید</p>}
            </div>

        </div>

    );
};

export default Birthday;
