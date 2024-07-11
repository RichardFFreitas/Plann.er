import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div id="important-links" className="space-y-6 ">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div id="link" className="flex items-center justify-between gap-16">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block hover:text-zinc-200 text-xs text-zinc-400 truncate"
            >
              https://www.airbnb.com.br/rooms/10470001111111111111111111111
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-16">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block hover:text-zinc-200 text-xs text-zinc-400 truncate"
            >
              https://www.airbnb.com.br/rooms/10470001111111111111111111111
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>
      <Button variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo Link
      </Button>
    </div>
  );
}
