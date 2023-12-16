const Sidebar_id = (props:any) => {

    const { section1Ref, section2Ref, section3Ref ,handleTarget } = props


    return (
        <div className='flex flex-col items-start gap-6 relative bottom-56 '>

            <div className='w-[303.47px] h-[290px]'><img src='/images/user/blog/f1.png' alt='F1' /></div>

            <div className='flex flex-col rounded-[20px] shadow-[0_0_20px_rgba(0,0,0,0.05)] text-[18px] font-normal leading-9 h-[218px] w-full pr-6 pt-4'>
                <h3 className='font-bold'>فهرست</h3>
                <ul>
                    <li onClick={() => handleTarget(section1Ref)}>نقشه سایت چیست؟</li>
                    <li onClick={() => handleTarget(section2Ref)}>چرا به نقشه سایت نیاز داریم؟</li>
                    <li onClick={() => handleTarget(section3Ref)}>انواع سایت مپ</li>
                    <li >روش های ساخت سایت مپ</li>
                </ul>
            </div>
        </div>

    )
}

export default Sidebar_id
