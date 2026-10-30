import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button, Container, Grid, Input, Stack } from "../src";

function App() {
  return (
    <Container as="main" size="md">
      <Stack gap={6} style={{ paddingBlock: 24 }}>
        <Stack direction="row" gap={3} wrap>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button size="sm">Small</Button>
          <Button disabled>Disabled</Button>
        </Stack>

        <Stack gap={4} style={{ maxWidth: 320 }}>
          <Input label="Email" placeholder="you@mail.com" />
          <Input label="Пароль" type="password" error="Минимум 8 символов" />
        </Stack>

        <Grid columns={3} gap={3}>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} style={{
              padding: 16,
              background: "#eef2ff",
              borderRadius: 8,
              textAlign: "center",
            }}>
              {i + 1}
            </div>
          ))}
        </Grid>

        <Stack direction="row" justify="between" align="center">
          <Button variant="secondary">Cлева</Button>
          <Button variant="secondary">Справа</Button>
        </Stack>
      </Stack>
    </Container>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
