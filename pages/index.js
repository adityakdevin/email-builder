import dynamic from "next/dynamic";

export default function Home() {
    const EmailBuilder = dynamic(
        () => import('../components/EmailBuilder').then((bulder) => bulder.default),
        {
            ssr: false,
            loading: () => <div>Loading...</div>,
        },

    )
    return (
        <>
            <EmailBuilder/>
        </>
    )
}
