#!/usr/bin/env bash
# Downloads brand and content images from 1x2biler.dk into src/assets/.
# Idempotent: skips files that already exist.
# Run from repo root: bash scripts/fetch-assets.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ASSETS="$ROOT/src/assets/images"
PUBLIC="$ROOT/public"
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

fetch() {
	local url="$1"
	local dest="$2"
	if [[ -f "$dest" ]]; then
		echo "skip   $dest"
		return
	fi
	mkdir -p "$(dirname "$dest")"
	echo "fetch  $url -> $dest"
	curl -fsSL -A "$UA" --retry 3 --retry-delay 1 "$url" -o "$dest"
}

# --- Brand --------------------------------------------------------------
fetch "https://1x2biler.dk/wp-content/uploads/2025/09/1x2-biler-logo-1.png" \
	"$ASSETS/brand/logo.png"
fetch "https://1x2biler.dk/wp-content/uploads/2025/02/1x2-biler-logo.png" \
	"$ASSETS/brand/logo-footer.png"

# --- Partners -----------------------------------------------------------
fetch "https://1x2biler.dk/wp-content/uploads/2025/09/vinger-acceptauto-removebg-preview.png" \
	"$ASSETS/partners/acceptauto-logo.png"
fetch "https://1x2biler.dk/wp-content/uploads/2025/09/logo_cargarantie.png" \
	"$ASSETS/partners/cargarantie-logo.png"

# --- Cars: Audi Q5 (18 images, first one is the listing thumb) ----------
AUDI_Q5=(
	d3fb52d2-a865-416b-bc38-0aaa2f879d8b
	0f79f331-8bbb-421e-8fab-e5987b424f1b
	84c0c83b-4c33-4ed8-9844-0c4d1791e148
	1c2f8a2f-a33d-4d0a-83b8-79e86a72310b
	5f4283c0-5783-4298-aa5c-386eb7935287
	b439ed53-5e31-4e96-9705-b4d5012ad8fc
	94da2fd1-a23b-451d-966d-b9de087ca0d4
	6aa6e0ee-3553-40f8-a47a-fbaca3ca742d
	54f330e1-0410-47c7-b9d9-f9571723acb9
	46347560-a6ca-4c2b-8177-4a52f3b2d854
	0d179723-15b0-4f82-9b70-2ea09275647b
	1b3e8935-1321-4d0c-913d-49b7bebdf35b
	daf94972-7e48-4b9b-bf46-d8c826157082
	7763e099-e0b3-4616-bf7f-95ff500a4c59
	ea12a14a-a8fa-4f36-a105-96f256426111
	0f699c01-da56-46e9-838c-a7cd03d7a6ac
	854270c9-0429-4ce6-9139-b21d9ed7b4eb
	78dbbf7b-e8ed-4fd0-aa5d-97b40418fc94
)
i=1
for id in "${AUDI_Q5[@]}"; do
	num=$(printf "%02d" "$i")
	fetch "https://1x2biler.dk/wp-content/uploads/2025/10/${id}.jpeg" \
		"$ASSETS/cars/audi-q5/${num}.jpeg"
	i=$((i+1))
done

# --- Cars: Peugeot 308 (13 images) --------------------------------------
PEUGEOT=(
	dc2e1727-c04a-4906-a548-d3ad53f58659
	97985788-ff64-4b24-8e1d-2a3f1ef70fd4
	fea6cd65-3f2f-4050-ba3e-e541c3827e66
	07bd0ff6-ff88-45ae-a04f-0736f5088f46
	a75b06ef-39e0-43f3-b92b-4d9de333b195
	233f1b77-bc56-40b2-abda-62fc71e173ac
	c60791ab-d001-473e-ba99-c5f845d27ba5
	9f2c1c03-eae9-42d8-8047-5498010c1918
	3a023075-8d4a-48f6-bb4d-8f0be9418b07
	e8aa94f1-b8fd-472e-9390-a0fe88c38ac7
	164dc32b-8083-415c-9076-b017e1279e06
	6a8cb55f-89b9-4ef3-b7b3-5f162dbece10
	0441d66f-53b7-4bc9-9442-391de0aa8ed0
)
i=1
for id in "${PEUGEOT[@]}"; do
	num=$(printf "%02d" "$i")
	fetch "https://1x2biler.dk/wp-content/uploads/2025/10/${id}.jpeg" \
		"$ASSETS/cars/peugeot-308/${num}.jpeg"
	i=$((i+1))
done

# --- Cars: VW Up! (12 images) -------------------------------------------
VWUP=(
	94041493-b0f4-4e16-8bbd-95782cc2a179
	cbb5ad7a-959d-4762-83af-b1b28e86759f
	a157d275-d252-4529-99fb-c687fdbf90ad
	9df7c5d4-98cc-48e9-beb1-92a89431d975
	4acae093-c08d-440d-9cc8-a3a6780a032c
	b44e8ee4-deda-4b3d-ac34-293ef4340c5d
	51ce218e-3fdd-4f62-8eab-7439f115b644
	f2d05fc7-6f82-49df-bba5-0466c696bf81
	bca36a21-8da0-49de-a3c0-19d58d31b9c8
	f4c7172a-9ec0-4229-8144-13f453a54e82
	ea7f897b-afe2-49be-8c21-722e181c4d8e
	11e9fa33-3b09-4242-88c7-44a135ec5d95
)
i=1
for id in "${VWUP[@]}"; do
	num=$(printf "%02d" "$i")
	fetch "https://1x2biler.dk/wp-content/uploads/2025/10/${id}.jpeg" \
		"$ASSETS/cars/vw-up/${num}.jpeg"
	i=$((i+1))
done

# --- Cars: thumbnails for listing-only entries --------------------------
fetch "https://1x2biler.dk/wp-content/uploads/2025/10/329a2d36-96a3-411d-b31c-efd1c5f269bf.jpeg" \
	"$ASSETS/cars/kia-ceed/01.jpeg"
fetch "https://1x2biler.dk/wp-content/uploads/2025/10/b07b6f92-a912-4945-ad4c-b129813fd64a.jpeg" \
	"$ASSETS/cars/skoda-citigo/01.jpeg"

# --- Favicons (derived from logo) ---------------------------------------
if command -v sips >/dev/null 2>&1; then
	if [[ ! -f "$PUBLIC/favicon-96x96.png" ]]; then
		echo "build  favicon-96x96.png"
		sips -Z 96 "$ASSETS/brand/logo.png" --out "$PUBLIC/favicon-96x96.png" >/dev/null
	fi
	if [[ ! -f "$PUBLIC/apple-touch-icon.png" ]]; then
		echo "build  apple-touch-icon.png"
		sips -Z 180 "$ASSETS/brand/logo.png" --out "$PUBLIC/apple-touch-icon.png" >/dev/null
	fi
else
	echo "warn   sips not available; skipping favicon generation"
fi

echo "done"
