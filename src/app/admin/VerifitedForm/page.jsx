import VerifitedForm from "../../components/VerifitedForm/VerifitedForm"

const Verifited = async ({ searchParams }) => {
    const { email } = await searchParams

    return (
        <VerifitedForm email={email} />
    )
}

export default Verifited