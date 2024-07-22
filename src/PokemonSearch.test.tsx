import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { PokemonSearch } from "./PokemonSearch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getPokemon } from "./api";

vi.mock("./api");

function setupComponent() {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <PokemonSearch />
    </QueryClientProvider>
  );
}

describe("PokemonSearch", () => {
  it("fetches and renders the default Pokemon", async () => {
    vi.mocked(getPokemon).mockResolvedValue({
      status: "ok",
      pokemon: { name: "pikachu", order: 1 },
    });
    setupComponent();
    await waitForElementToBeRemoved(screen.getByText("Loading..."));
    expect(screen.getByText("pikachu")).toBeInTheDocument();
  });
});
