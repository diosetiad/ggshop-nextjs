import ReachItem from "../../molecules/ReachItem";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachItem title="10M+" desc="Players Top Up" />
          <ReachItem title="5" desc="Games Available" />
          <ReachItem title="98,2%" desc="Happy Players" />
          <ReachItem title="4.7" desc="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
