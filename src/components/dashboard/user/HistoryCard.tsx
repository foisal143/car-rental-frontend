const HistoryCard = ({ count, text }: { count: number; text: string }) => {
  return (
    <div className="w-full text-center p-10 border shadow-sm rounded-md">
      <h4 className="text-3xl font-semibold font-text">{count}</h4>
      <p className="text-primary font-bold font-heading">{text}</p>
    </div>
  );
};

export default HistoryCard;
