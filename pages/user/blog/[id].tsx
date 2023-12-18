import Header_id from '@/components/user/blog/Header_id'
import Layout_User from '@/components/user/layout_user/Layout_User'
import React, { useRef } from 'react'

const a = () => {

  const ref = [
    { id: 1, title: "نقشه سایت چیست؟" },
    { id: 2, title: "چرا به نقشه سایت نیاز داریم؟" },
    { id: 3, title: "انواع سایت مپ" },
    { id: 4, title: "روش های ساخت سایت مپ" },
  ]


  const refid = useRef(null)

  const handleTarget = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  console.log(refid)


  return (

    <Layout_User showFooter>



      <div className='flex flex-col'>

        <Header_id />


        <div className='flex justify-center gap-3'>


          <div className='flex flex-col items-start gap-6 relative bottom-56 '>

            <div className='w-[303.47px] h-[290px]'><img src='/images/user/blog/f1.png' alt='F1' /></div>

            <div className='flex flex-col rounded-[20px] shadow-[0_0_20px_rgba(0,0,0,0.05)] text-[18px] font-normal leading-9 h-[17%] w-full pr-6 pt-4'>
              <h3 className='font-bold'>فهرست</h3>
              {ref.map((item) => {
                return (
                  <div>
                    <ul>
                      <li onClick={(item) => handleTarget(refid)}>{item.title}</li>
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>



          <div className='flex flex-col w-[59.2%] shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-[20px] text-lg pr-5 pt-9 mt-6 mb-[30px]'>

            <div className='mb-[54px]'>
              <p>همانطور که پیدا کردن یک مکان بدون استفاده از آدرس و نقشه دشوار است ، برای گوگل هم دسترسی به همه صفحات سایت بدون نقشه دشوار است. یک نقشه سایت (Sitemap) خوب می‌تواند به خزنده های گوگل در کراول کردن سایت و هدایت آنها کمک کند.</p>
            </div>


            <div className='flex flex-col gap-8 w-[90%] pt-6'>

              <div ref={refid} className='flex flex-col gap-6'>

                <h3 className='font-bold '>نقشه سایت چیست؟</h3>
                <p>
                  نقشه سایت XML در واقع یک فایل متنی حاوی تمام آدرسهای موجود در سایت است. همچنین نقشه سایت میتواند اطلاعات
                  متا ( توضیحات) هر آدرس از سایت مانند آخرین بروز رسانی، میزان اهمیت و نحوه ارتباط آن با صفحات دیگر را نیز شامل شود.
                  وجود نقشه سایت به موتورهای جستجو کمک می کند تا صفحات سایت را به صورت بهتر شناسایی کرده و همچنین از ایجاد
                  صفحات جدید و تغییرات در صفحات قدیمی مطلع شود.
                </p>
                <p className='w-[94%]'>
                  مهم‌ترین کاری که از نظر سئو، سایت مپ می‌کند هدایت خزنده‌ها درون صفحات یک وب‌سایت است تا همه‌ی صفحات
                  شوند. تعریف تخصصی‌تر سایت مپ این است: لیستی از آدرس‌های  یک وب‌سایت.اما، سایت مپ ساختار سایت شما را
                  هم نشان می‌دهد، اینکه چطور صفحات مختلف ساماندهی شده و دسته‌بندی‌ها انجام گرفته است.
                </p>
                <p>
                  نقشه‌های سایت نمی‌توانند بیش از 50 هزار URL را در خود ثبت کنند. همچنین حجم فایل نقشه سایت نیز حداکثر می‌تواند 50
                  مگابایت باشد. در صورتی که نقشه سایتتان از یکی از این دو مورد بزرگتر شود، باید با دسته بندی مطالب در نقشه‌های مختلف
                  هریک را بصورت جدا در موتورهای جستجو ثبت کنید. سایت شما می‌تواند یک نقشه سایت برای صفحات، یک نقشه برای
                  تصاویر و یک نقشه برای ویدیوها داشته باشد. نحوه ثبت نقشه سایت در ادامه توضیح خواهیم داد.
                </p>
              </div>


              <div ref={refid}>

                <h3 className='font-bold mb-6'>چرا به نقشه سایت نیاز داریم؟</h3>
                <p>
                  گوگل محتواهای جدید را توسط ربات‌های خزنده‌ای که وب را بررسی می‌کنند کشف می‌کند. وقتی یک صفحه توسط این ربات‌ها
                  بررسی می‌شود، به لینک‌های داخلی و خارجی آن توجه می‌شود. اگر یک آدرس URL پیدا شود که در فهرست جستجوی آن‌ها
                  نیست، محتوای آن آدرس را فراخوانی می‌کنند و در جای مناسب ایندکس می‌کنند.
                </p>
                <p>
                  اما گوگل نمی‌تواند تمام محتواهای موجود را به این روش پیدا کند. اگر صفحه‌ای وجود داشته باشد که از صفحات شناخته شده
                  به آن لینک داخلی داده نشده باشد، گوگل قادر به پیدا کردنش نخواهد بود.
                </p>
                <p>
                  اینجاست که اهمیت نقشه سایت در سئو مشخص می‌شود. کار سایت مپ این است که به گوگل
                  بگوید که کجا و در چه آدرسی می‌توانند مهم‌ترین صفحات آن سایت را پیدا کنند تا بتوانند این صفحات را ایندکس کنند.
                </p>
              </div>


              <div ref={refid}>

                <h3 className='font-bold mb-6'>انواع سایت مپ</h3>
                <p>سایت مپ به دو نوع کلی تقسیم بندی می شود:</p>
                <p>– Visual Sitemap یا سایت مپ از نوع HTML</p>
                <p>این نوع سایت مپ معمولاً پیش از طراحی سایت ایجاد می‌شود.</p>
                <p>
                  در این نوع از نقشه سایت دسته‌بندی اطلاعات و صفحات، ارتباط صفحات و محتواها مشخص می‌شود. همچنین این نوع سایت
                  مپ مخصوص کاربران بازدید کننده وب سایت است و به آنها کمک می کند که محتویات صفحات مورد نظرشان را براحتی پیدا
                  نمایند. سایت مپ از نوع HTML قابل استفاده در گوگل وبمستر نیست.
                </p>
                <p>– XML Sitemap یا سایت مپ از نوع XML</p>
                <p>
                  این نوع سایت مپ زمانی ایجاد میشود که شما سایت و صفحات مختلف را ساخته‌اید و آماده‌اید تا آن را به گوگل نشان دهید.
                  این نوع نقشه سایت است که راهنمای خزنده‌های گوگل است و در سئو سایت بسیار بسیار مهم است.
                  این نوع سایت مپ دارای ساختار سازمان یافته شده ای دارد و احتیاج به مشاهده شدن توسط کاربران وب سایت
                  ندارد. سایت مپ از نوع XML می تواند در فایل Robots.txt آدرس دهی شود تا به موتورهای جستجو کمک نماید
                  راحتر این فایل را پیدا نمایند.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>

    </Layout_User>

  )
}

export default a
