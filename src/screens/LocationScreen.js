import { View } from "react-native";
import { getCurrentPositionAsync} from 'expo-location'

function LocationPicker() {

    const [locationPermissionInformation, requestPermission] = useForgroundPermissions();

    async function verifiPermission() {
        if (locationPermissionInformation.statue === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission;
            return permissionResponse.granted;
        }
        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficent Permission",
                "You need to grant location permission to use thie app"
            );
            return false;
        }
        return true;
    }


    async function getLocation() {
        const hasPermission = verifiPermission();
        if (!hasPermission) {
            return;
        }
        const location = await getCurrentPositionAsync();
    }

    return (
        <View>

        </View>

    );


}

export default LocationPicker;