interface TokensGridProps {
  tokens: Record<string, string>;
  hasRemValues?: boolean;
}
export const TokensGrid = ({
  tokens,
  hasRemValues = false,
}: TokensGridProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValues && <th>Px</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValues && (
                <td>{Number(value.replace("rem", "")) * 16}px</td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
