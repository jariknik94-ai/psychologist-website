type ActionIconProps = {
  name: "person" | "book" | "conversation" | "group";
};

export function ActionIcon({ name }: ActionIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      {name === "person" && <><circle cx="12" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>}
      {name === "book" && <path d="M12 7C9 4 5 4 2 5v13c4-1 7-1 10 2 3-3 6-3 10-2V5c-3-1-7-1-10 2Zm0 0v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
      {name === "conversation" && <path d="M4 5h16v11H9l-5 4V5Zm4 5h8m-8 3h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
      {name === "group" && <><circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M6 21v-2a6 6 0 0 1 12 0v2M4 10a3 3 0 0 0 0 6M20 10a3 3 0 0 1 0 6M1 21v-1a5 5 0 0 1 3-5M23 21v-1a5 5 0 0 0-3-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>}
    </svg>
  );
}
