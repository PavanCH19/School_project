import Header from "../components/Header";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const Admission = () => {

    return (<>
        <Header />
        <NavBar />
        <section className="container my-5" data-aos="fade-up">
            <h2 className="mb-4 text-primary text-center">Admission Process</h2>
            <p>
                At [School Name], we aim to provide a seamless and transparent
                admission process to ensure the best start for your child's education.
                Our admission procedure is simple and designed to make the journey of
                enrolling your child smooth and hassle-free.
            </p>

            <h3>Step 1: Online Registration</h3>
            <p>
                The first step in our admission process is to complete the online
                registration form. You can find the registration form on our website.
                Fill in all the required details, including the student's name, grade,
                contact details, and parent's information. Make sure to provide accurate
                information to avoid any delays.
            </p>

            <h3>Step 2: Document Submission</h3>
            <p>
                Once you have registered online, you will be required to submit the
                following documents to complete the admission process:
            </p>
            <ul>
                <li>Student's Birth Certificate</li>
                <li>Parent/Guardian's ID Proof</li>
                <li>Previous Academic Records (if applicable)</li>
                <li>Passport-size Photographs</li>
            </ul>
            <p>
                You can either upload these documents online or submit them in person at
                the school office.
            </p>

            <h3>Step 3: Admission Test/Interview</h3>
            <p>
                After the document submission, depending on the grade you are applying
                for, your child may need to appear for an admission test or an interview
                with our admission panel. The test/interview will assess your child's
                academic abilities and overall fit for our curriculum.
            </p>
            <p>
                For younger children, the process may be more informal, involving
                interaction with the teachers to gauge developmental readiness.
            </p>

            <h3>Step 4: Confirmation of Admission</h3>
            <p>
                After reviewing the test/interview results and submitted documents, we
                will notify you about the status of your child's admission. If your child
                is accepted, you will receive an official admission offer with detailed
                information on the next steps.
            </p>

            <h3>Step 5: Fee Payment</h3>
            <p>
                Once you have accepted the admission offer, the next step is to pay the
                required fees. Our school offers flexible payment options, and you can
                make the payment either online through our secure portal or directly at
                the school office.
            </p>
            <p>
                The fee structure includes tuition fees, extracurricular activity fees,
                and other charges. A detailed breakdown of the fees will be provided
                upon admission.
            </p>

            <h3>Step 6: Orientation</h3>
            <p>
                After the fee payment, we invite parents and students to attend an
                orientation session. This session will provide valuable information about
                the school’s culture, curriculum, extracurricular activities, and
                general rules. It’s a great opportunity to meet teachers, fellow students,
                and parents.
            </p>

            <h3>Step 7: Begin the School Year</h3>
            <p>
                Finally, once all the steps are complete, your child will officially begin
                the school year with us. We aim to create a welcoming and nurturing
                environment to help students thrive and excel.
            </p>

            <h3>Important Notes:</h3>
            <ul>
                <li>Admissions are subject to availability of seats.</li>
                <li>Incomplete applications will not be processed.</li>
                <li>We encourage early registration to avoid last-minute delays.</li>
            </ul>

            <h3>Contact Us</h3>
            <p>
                If you have any questions or need assistance during the admission
                process, please feel free to contact our admission team. We are here to
                help!
            </p>
        </section>
        <Footer />
    </>);
};

export default Admission;
