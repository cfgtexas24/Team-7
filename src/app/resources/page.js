"use client";

import Link from "next/link";

export default function Resources() {
    const cpsData = [
        {id: 1, value: "Information on what an attorney for a Parent does in a CPS case", link: "https://texasfosteryouth.org/download/4892/"},
        {id: 2, value: "Attorney Ad Litems*", link: "https://texasfosteryouth.org/download/424/"},
        {id: 3, value: "Checklist for Judges*", link: "https://texasfosteryouth.org/download/359/"},
        {id: 4, value: "Court Hearings for Foster Youth Over 18 (Extended Jurisdiction)*", link: "https://texasfosteryouth.org/download/415/"},
        {id: 5, value: "Detailed Checklist for Attorney Ad Litems and CASAs Preparing Foster Youth for Post Foster Care Life*", link: "https://texasfosteryouth.org/download/390/"},
        {id: 6, value: "Directing Attorney Ad Litem to Advocate to Attend Court Hearings*", link: "https://texasfosteryouth.org/download/421/"},
        {id: 7, value: "Report to Court by Foster Youth", link: "https://texasfosteryouth.org/download/427/"},
        {id: 8, value: "Rights of Foster Youth to Attend Court Hearings Legal Memorandum*", link: "https://texasfosteryouth.org/download/418/"},
    ];

    const studentData = [
        {id: 9, value: "Tuition Waiver FAQ", link: "https://texasfosteryouth.org/download/13598/"},
        {id: 10, value: "Education and Training Voucher FAQ", link: "https://texasfosteryouth.org/download/13595/"},
        {id: 11, value: "Transitional Living Services Resource Guide-April 2020", link: "https://texasfosteryouth.org/download/12480/"},
        {id: 12, value: "BRIEF OVERVIEW OF TRANSITIONAL LIVING SERVICES -January 2020", link: "https://texasfosteryouth.org/download/4660/"},
        {id: 13, value: "A Guide to Aging Out of Foster Care in Texas- 7th EDITION*", link: "https://texasfosteryouth.org/download/3866/"},
        {id: 14, value: "Tuition and Fee Waiver Process", link: "https://texasfosteryouth.org/download/1598/"},
        {id: 15, value: "College Tuition and Fee Waiver Information*", link: "https://texasfosteryouth.org/download/1133/"},
        {id: 16, value: "Caring for Youth and Young Adults - A Guide from the Texas Department of Family and Protective Services", link: "https://texasfosteryouth.org/download/100/"},
        {id: 17, value: "Free Health Insurance (Medicaid) for Aged Out Foster Youth Ages 18-25 (updated July 2016)*", link: "https://texasfosteryouth.org/download/362/"},
        {id: 18, value: "Living with a Parent When Aging Out of Foster Care for Advocates*", link: "https://texasfosteryouth.org/download/349/"},
        {id: 19, value: "Living with a Parent When Aging Out of Foster Care for Youth*", link: "https://texasfosteryouth.org/download/352/"},
        {id: 20, value: "Medicaid Residency Verification Letter (Sample- updated MAY 2017)", link: "https://texasfosteryouth.org/download/826/"},
        {id: 21, value: "Transitional Benefits and Out of State Foster Youth*", link: "https://texasfosteryouth.org/download/346/"}
    ];

    const histData = [
        {id: 22, value: "Obtaining Your CPS Records*", link: "https://texasfosteryouth.org/download/109/"}
    ]

    return (
        <main>

            <div class="items-center">
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">CPS Case Court Hearings:</h2>
                <ul class="max-w-md space-y-1 text-gray-800 list-disc list-inside dark:text-gray-400">
                    {cpsData.map(x => {
                        return (
                            <li key={x.id}><Link href={x.link}>{x.value}</Link></li>
                        );
                    })}
                </ul>
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Benefits for Aged Out and Older Foster Youth:</h2>
                <ul class="max-w-md space-y-1 text-gray-800 list-disc list-inside dark:text-gray-400">
                    {studentData.map(x => {
                        return (
                            <li key={x.id}><Link href={x.link}>{x.value}</Link></li>
                        )
                    })}
                </ul>
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Getting Your History</h2>
                <ul class="max-w-md space-y-1 text-gray-800 list-disc list-inside dark:text-gray-400">
                    {histData.map(x => {
                        return (
                            <li key={x.id}><Link href={x.link}>{x.value}</Link></li>
                        )
                    })}
                </ul>
            </div>
        </main>
    );
}