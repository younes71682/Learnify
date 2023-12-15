import React, { useState } from "react"
import DatePicker, { DateObject } from "react-multi-date-picker"
import persian_fa from "react-date-object/locales/persian_fa"
import persian from "react-date-object/calendars/persian"
import gregorian_en from "react-date-object/locales/gregorian_en"
import gregorian from "react-date-object/calendars/gregorian"
import "react-multi-date-picker/styles/colors/green.css"
import Button from "react-multi-date-picker/components/button"

const Date = () => {
    const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]
    const [value, setValue] = useState(new DateObject())


    const date = value.convert(gregorian, gregorian_en)
    console.log(date.format())

    return (
        <div className="">
            <DatePicker style={{ padding: '15px', textAlign: "center", width: "60%" }}
                value={value}
                onChange={setValue}
                locale={persian_fa}
                calendar={persian}
                weekDays={weekDays}
                className="green"
                render={<Button style={{ backgroundColor: "white", color: "black", boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)" }} />}
            />

        </div>
    )
}
export default Date