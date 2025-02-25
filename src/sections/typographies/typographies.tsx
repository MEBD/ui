import Button from "../../components/button/button";
import Typography from "../../components/typography/typography";

const TypographiesSection = () => {
  return (
    <section>
      <Typography type="h1">Typographies</Typography>
      <hr />
      <Typography type="h1">h1</Typography>
      <Typography type="h2">h2</Typography>
      <Typography type="h3">h3</Typography>
      <Typography type="h4">h4</Typography>
      <Typography type="h5">h5</Typography>
      <Typography type="h6">h6</Typography>
      <Typography type="subtitle">subtitle</Typography>
      <Typography type="subtitleVariant">subtitleVariant</Typography>
      <Typography type="body">body</Typography>
      <Typography type="bodyVariant">bodyVariant</Typography>
    </section>
  );
};

export default TypographiesSection;
