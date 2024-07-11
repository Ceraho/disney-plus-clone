"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SearchField = () => {
  const [query, setQuery] = useState<string>();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const term = query;
    const params = new URLSearchParams();
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        name="search input"
        placeholder="Search by title, character, or genre"
        maxLength={64}
        className="w-screen h-14 md:h-24 fixed top-16 bg-[#4B4E5A] placeholder-[#A8A9AD] font-medium text-[24px] md:text-[32px] px-10 z-10"
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchField;
