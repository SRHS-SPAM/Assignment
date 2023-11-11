import Main from "/components/Main";

export default function Page() {
  /**
   * @notice you can edit only this
   */
  let url = "dnjeh";

  let complete = 2;
  return (
    <>
      <Main complete={complete} url={url}></Main>
    </>
  );
}
