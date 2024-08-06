import { sendEmail } from "@/utils/mails.utils"

export  async function POST()
{
	const sender ={
		name:'hm44b',
		address:'hm44b@belgianairways.com'
	}

	const recievers=[{
		name:'Sumukh J',
		address:'sumukhjoshi4@gmail.com'
	}]

	try {
		const result = await sendEmail({sender, recievers, subject:'Welcome to our website', message:'you are welcome to our platform'})

		return Response.json({acepted:result.accepted})
	} catch (error) {
		return Response.json({message:"Unable to send"})
	}
}