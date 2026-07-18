from colorsys import hsv_to_rgb, rgb_to_hsv
from pathlib import Path

from PIL import Image


source = Path(
    "opendesign/mockups/mundial-final-argentina-espana/assets/panorama/"
    "ball-fire-spain-cutout.png"
)
target = source.with_name("ball-fire-spain-cutout-clean.png")
image = Image.open(source).convert("RGBA")
pixels = []

for red, green, blue, alpha in image.get_flattened_data():
    if alpha == 0:
        pixels.append((red, green, blue, alpha))
        continue

    hue, saturation, value = rgb_to_hsv(red / 255, green / 255, blue / 255)
    is_key_spill = saturation > 0.18 and 0.14 <= hue <= 0.46 and green > red * 0.92
    if is_key_spill:
        red, green, blue = (
            round(channel * 255)
            for channel in hsv_to_rgb(0.09, max(saturation, 0.62), value)
        )
    pixels.append((red, green, blue, alpha))

image.putdata(pixels)
image.save(target)
print(f"Wrote {target}")
