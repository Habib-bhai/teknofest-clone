import useData from "../context/context"

export default function Form() {

    interface FormFields {
        // name: string,
        // email: string,
        // num: string,
        // gender: string,
        // address: string,
        // education: string,
        participantNumber: number
    }

    const { dataToSend } = useData()
    const formFields: FormFields[] = []
    for (let i = 1; i <= (dataToSend!.MaximumParticipantsAllowed - 1); i++) {
        formFields.push({
            // name: `Name of number:${i} participant`,
            // email: `Email of number:${i} participant}`,
            // num: `Phone number of number:${i} participant}`,
            // gender: `Gender of number:${i} participant}`,
            // address: `Address of number:${i} participant}`,
            // education: `Recent Education Qualification of number:${i} participant`,
            participantNumber: i
        })
    }

    return (
        <div >
            {/* form */}
            <form className="w-screen px-5 md:px-32  flex flex-col justify-center items-center" >

                {/* Team name */}
                <div className="w-full flex flex-col justify-center items-start mb-10">
                    <label htmlFor="teamName" className="text-sm text-left w-[100%] md:w-[50%] mb-4" >TEAM NAME</label>

                    <input type="text" id="teamName" className="text-center h-12 w-[100%] md:w-[50%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                </div>

                {/* Team Lead */}
                <h1 className="text-left w-full text-4xl font-bold text-[#3a4cb4] mb-5">TEAM LEAD</h1>
                {/* name & email */}
                <div className="w-full flex justify-center items-center gap-4">

                    <div className="w-full flex flex-col justify-center items-start">
                        <label htmlFor="LeadName" className="text-left w-[50%] mb-2" >NAME</label>

                        <input type="text" id="LeadName" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                    </div>

                    <div className="w-full flex flex-col justify-center items-start">
                        <label htmlFor="LeadsEmail" className="text-left w-[50%] mb-2" >EMAIL</label>

                        <input type="email" id="LeadsEmail" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                    </div>

                </div>

                {/* phone number & address */}
                <div className="w-full mt-4 flex justify-center items-center gap-4">

                    <div className="w-full flex flex-col justify-center items-start">
                        <label htmlFor="leadnum" className="text-left w-[50%] mb-2" >PHONE NUM.</label>

                        <input type="number" id="leadnum" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                    </div>

                    <div className="w-full flex flex-col justify-center items-start">
                        <label htmlFor="leadAddress" className="text-left w-[50%] mb-2" >ADDRESS</label>

                        <input type="text" id="leadAddress" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                    </div>

                </div>

                {/* Gender & education */}
                <div className="w-full mt-4 flex justify-center items-center gap-4">

                    <div className="w-full flex flex-col justify-center items-start">
                        <label htmlFor="LeadGender" className="text-left w-[50%] mb-2" >Gender</label>

                        <input type="text" id="LeadGender" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                    </div>

                    <div className="w-full flex flex-col justify-center items-start">
                        <label htmlFor="leadEducation" className="text-left w-[50%] mb-2" >Education</label>

                        <input type="text" id="leadEducation" placeholder="Lead's latest Qualification" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                    </div>

                </div>

                {
                    formFields.map(items =>
                        <>
                            {
                                items.participantNumber === 1 ?
                                    <h1 className="text-left w-full text-4xl font-bold text-[#3a4cb4] mb-5">{items.participantNumber}ST MEMBER</h1> :
                                    items.participantNumber === 2 ? <h1 className="text-left w-full text-4xl font-bold text-[#3a4cb4] mb-5">{items.participantNumber}ND MEMBER</h1> : items.participantNumber === 3 ? <h1 className="text-left w-full text-4xl font-bold text-[#3a4cb4] mb-5">{items.participantNumber}RD MEMBER</h1> :  <h1 className="text-left w-full text-4xl font-bold text-[#3a4cb4] mb-5">{items.participantNumber}TH MEMBER</h1> }

                           

                            {/* name & email */}
                            <div className="w-full flex justify-center items-center gap-4">

                                <div className="w-full flex flex-col justify-center items-start">
                                    <label htmlFor="LeadName" className="text-left w-[50%] mb-2" >NAME</label>

                                    <input type="text" id="LeadName" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <label htmlFor="LeadsEmail" className="text-left w-[50%] mb-2" >EMAIL</label>

                                    <input type="email" id="LeadsEmail" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                                </div>

                            </div>

                            {/* phone number & address */}
                            <div className="w-full mt-4 flex justify-center items-center gap-4">

                                <div className="w-full flex flex-col justify-center items-start">
                                    <label htmlFor="leadnum" className="text-left w-[50%] mb-2" >PHONE NUM.</label>

                                    <input type="number" id="leadnum" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <label htmlFor="leadAddress" className="text-left w-[50%] mb-2" >ADDRESS</label>

                                    <input type="text" id="leadAddress" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                                </div>

                            </div>

                            {/* Gender & education */}
                            <div className="w-full mt-4 flex justify-center items-center gap-4">

                                <div className="w-full flex flex-col justify-center items-start">
                                    <label htmlFor="LeadGender" className="text-left w-[50%] mb-2" >Gender</label>

                                    <input type="text" id="LeadGender" className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start">
                                    <label htmlFor="leadEducation" className="text-left w-[50%] mb-2" >Education</label>

                                    <input type="text" id="leadEducation" placeholder={`${items.participantNumber} Member's recent Qualification`} className="text-center h-12 w-[100%] rounded-md outline-none border-gray-400 border-[1px] focus:rounded-2xl focus:border-[#3a4cb4] transition-all duration-300 ease-in-out" />
                                </div>

                            </div>

                        </>
                    )}

                <div className="w-full mt">
                    <button className="h-10 w-40 rounded-md hover:rounded-2xl hover:bg-[#00a700] bg-[#3a4cb4] text-white mt-6 transition-all duration-200 ease-in-out">ADD TO BASKET</button>
                </div>
            </form>
        </div>
    )
}
