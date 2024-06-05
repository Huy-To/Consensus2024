import {Form, FormFields} from "./base/Form";

export default function EditForm() {
    return (
        <div>
            <section className="text-center mt-6 mb-6">
                <span className="block text-5xl font-bold font-mono text-color-Logo">Eleutheria DEMO</span>
                <span className="mt-6 block text-3xl font-semibold font-mono text-white">Profile Sign Up</span>
            </section>
            <Form name={""} jobTitle={""} about={""} imageURL={""} github={""} linkdin={""} website={""} x={""} children={undefined}>
            </Form>
        </div>
    )
}