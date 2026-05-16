export default function Page() {
    return (
        <div className="py-10 lg:py-16 container mx-auto px-3">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    Goodwell - Privacy Policy
                </h1>

                <p className="text-sm text-gray-500">
                    Last Updated: May 15, 2026
                </p>
            </div>

            {/* Intro */}
            <div className="space-y-5 text-gray-700">
                <p>
                    This Privacy Policy explains how our internal store management
                    application (Goodwell) collects, uses, and protects information used by
                    employees, sellers, and authorized staff members of the company.
                </p>

                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-lg">
                    <p className="text-indigo-900 font-medium">
                        This application is intended strictly for internal business
                        operations and seller/store management purposes.
                    </p>
                </div>
            </div>

            {/* Section 1 */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    1. Information We Collect
                </h2>

                <p className="mb-4 text-gray-700">
                    The App may collect the following information:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Phone number used for account login and identification.</li>
                    <li>Password credentials for secure authentication.</li>
                    <li>Device camera access for QR code scanning.</li>
                    <li>Product and inventory data related to store operations.</li>
                    <li>Basic usage logs for security and operational monitoring.</li>
                </ul>
            </section>

            {/* Section 2 */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    2. How We Use Information
                </h2>

                <p className="mb-4 text-gray-700">
                    The collected information is used for:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Authenticating authorized employees and sellers.</li>
                    <li>Managing store products and inventory.</li>
                    <li>Scanning QR codes to quickly identify products.</li>
                    <li>Improving operational efficiency within the company.</li>
                    <li>Maintaining security and preventing unauthorized access.</li>
                </ul>
            </section>

            {/* Section 3 */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    3. Camera Permission
                </h2>

                <div className="space-y-4 text-gray-700">
                    <p>
                        The App requires access to the device camera only for scanning QR
                        codes related to products and inventory management.
                    </p>

                    <p>
                        The camera is not used for recording videos, taking photos for
                        storage, or collecting personal media without user action.
                    </p>
                </div>
            </section>

            {/* Section 4 */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    4. Login & Security
                </h2>

                <p className="text-gray-700">
                    User accounts are protected using phone number and password
                    authentication. Employees and authorized users are responsible for
                    keeping their login credentials secure and confidential.
                </p>
            </section>

            {/* Section 5 */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    5. Data Sharing
                </h2>

                <p className="text-gray-700">
                    The company does not sell or publicly share internal operational data.
                    Information may only be accessed by authorized company personnel for
                    business purposes.
                </p>
            </section>

            {/* Section 6 */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    6. Data Retention
                </h2>

                <p className="text-gray-700">
                    Information may be retained as long as necessary for operational,
                    security, legal, or administrative purposes within the company.
                </p>
            </section>

            {/* Section 7 */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    7. User Responsibilities
                </h2>

                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Use the application only for authorized company activities.</li>
                    <li>Do not share login credentials with unauthorized persons.</li>
                    <li>Report suspicious activity or unauthorized access immediately.</li>
                </ul>
            </section>

            {/* Section 8 */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    8. Changes to This Policy
                </h2>

                <p className="text-gray-700">
                    The company may update this Privacy Policy from time to time.
                    Updated versions will be published within the application or company
                    systems.
                </p>
            </section>

            {/* Section 9 */}
            <section className="mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    9. Contact
                </h2>

                <p className="text-gray-700">
                    For questions regarding this Privacy Policy or internal data handling,
                    please contact your company administrator or IT department.
                </p>
            </section>

        </div>
    )
}