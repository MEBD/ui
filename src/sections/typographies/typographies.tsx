import Typography from "../../components/typography/typography";

const TypographiesSection = () => {
  return (
    <section>
      <Typography variant="h1">Typographies</Typography>
      <hr />
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="subtitle">subtitle</Typography>
      <Typography variant="subtitle-variant">subtitle-variant</Typography>
      <Typography variant="body">body</Typography>
      <Typography variant="body-variant">body-variant</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="caption-variant">caption-variant</Typography>
      <Typography variant="call-to-action-large">call-to-action-large</Typography>
      <Typography variant="call-to-action-medium">call-to-action-medium</Typography>
      <Typography variant="call-to-action-small">call-to-action-small</Typography>
    </section>
  );
};

export default TypographiesSection;
