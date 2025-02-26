import Button from "../../components/button/button";
import Typography from "../../components/typography/typography";

const ButtonsSection = () => {
  return (
    <section>
      <Typography variant="h1">Buttons</Typography>
      <hr />
      <article>
        <Button>Default</Button>
      </article>
      <article>
        <Button variant="filled" size="small">
          Size small
        </Button>
        <Button variant="filled" size="medium">
          Size medium
        </Button>
        <Button variant="filled" size="large">
          Size large
        </Button>
      </article>
      <article>
        <Button variant="default">Variant default</Button>
        <Button variant="filled">Variant filled</Button>
        <Button variant="outlined">Variant outlined</Button>
      </article>
    </section>
  );
};

export default ButtonsSection;
