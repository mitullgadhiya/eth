import { useTheme } from "next-themes";

function useColorModeValue<TLight = unknown, TDark = unknown>(
  light: TLight,
  dark: TDark
) {
  const { resolvedTheme } = useTheme();

  return resolvedTheme === "light" ? light : dark;
}

export default useColorModeValue;
