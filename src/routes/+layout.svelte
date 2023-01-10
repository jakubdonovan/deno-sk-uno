<script lang="ts">
   import "./prerun.ts";
   import "./dev.ts";

// prerun.ts
import { Buffer } from "https://deno.land/std@0.171.0/node/buffer.ts";
(globalThis as any).Buffer = Buffer;

   import 'npm:uno.css';
   import 'npm:@unocss/reset/tailwind.css'
</script>