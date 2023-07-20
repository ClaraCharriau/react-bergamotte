import BackButton from "components/common/back-button/BackButton";
import Display from "components/common/display/Display";
import WinnerButton from "components/common/winner-button/WinnerButton";

const About = () => {
  return (
    <main>
      <BackButton />
      <hr />
      <h2>À propos</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quis perspiciatis molestias consequatur vitae magnam omnis, enim fugiat optio rerum esse nulla amet in quam porro quos quod unde. Ducimus!</p>
      <WinnerButton />
      <hr />
      <Display>
        <p>Hello !!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis reprehenderit, ex quibusdam quis labore sint asperiores odio praesentium aperiam! Laboriosam nobis inventore facere sed placeat, debitis voluptates vitae magnam ullam.</p>
      </Display>
    </main>
  );
};

export default About;
