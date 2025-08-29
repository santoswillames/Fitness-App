import { useNavigation } from "@react-navigation/native";
import { Box } from "components/ui/box";
import { Button, ButtonIcon } from "components/ui/button";
import { ChevronLeft } from "lucide-react-native";


export function HeaderNavigatorAuth() {
    const navigation = useNavigation()

    return (
        <Box className="py-9 justify-end">
            <Button
                variant="outline"
                className="rounded-2xl p-3.5 w-[55px] h-[44px] self-start border-[#D9D9D9]"
                onPress={() => navigation.goBack()}
            >
                <ButtonIcon as={ChevronLeft} color="white" size={24}/>
            </Button>
        </Box>

    )
}