import Main from "/components/Main";

export default function Page() {
    /**
     * @notice You can edit only this
     */
    let url = "min";

    let complete = 1;
    return (
        <>
            <Main complete={complete} url={url}></Main>
        </>
    );
}
