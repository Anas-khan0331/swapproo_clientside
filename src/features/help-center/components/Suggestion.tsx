import Link from "next/link";

interface SuggestionItem {
  id: string | number;
  url: string;
  suggestion: string;
}

interface SuggestionsProps {
  items?: SuggestionItem[];
}

const Suggestions = ({ items = [] }: SuggestionsProps) => {
  return (
    <div className="suggestions">
      <div className="suggestions-header">
        <p className="suggestions-title">Suggestions:</p>
        <div className="suggestions-list">
          {items?.map((item) => {
            return (
              <Link key={item?.id} href={item?.url} className="suggestion-link">
                {item?.suggestion}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
