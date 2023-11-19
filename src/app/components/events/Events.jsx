import SectionHeader from "../SectionHeader";
import EventBox from "./EventBox";

// fetching the events data from the database on the localhost cmputer
const getEvent = async () => {
  const res = await fetch("http://localhost:4000/events");
  return res.json(); // returning a json object
};
// calling getEvent function above
const Events = async () => {
  const events = await getEvent();
  // console.log(events);
  return (
    <section className="section" id="tours">
      <div className="container mx-auto">
        {/* Importing the Section Header component */}
        <SectionHeader pretitle={'World Tours'} title={'Upcoming Events'}/>
        {/* importing the EventBox component */}
        <EventBox events={events} />
      </div>
    </section>
  );
};

export default Events;
