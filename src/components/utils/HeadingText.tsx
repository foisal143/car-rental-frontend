const HeadingText = ({ text }: { text: string }) => {
  return (
    <div>
      <h3 className="text-3xl font-semibold font-heading text-center">
        {text}
      </h3>
    </div>
  );
};

export default HeadingText;
