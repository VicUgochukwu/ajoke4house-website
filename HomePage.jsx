/* Ajoke4House — Home page (composition of homepage sections) */
function HomePage({ t }) {
  return (
    <React.Fragment>
      <Hero t={t} />
      <Pillars t={t} />
      <MeetAdejoke t={t} />
      <Priorities t={t} />
      <BallotPVC t={t} />
      <JoinForm t={t} />
      <ReportBacks t={t} />
      <Gallery t={t} />
      <DonateBand t={t} />
      <FinalCTA t={t} />
    </React.Fragment>
  );
}
window.HomePage = HomePage;
