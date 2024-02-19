import {
  useCreateRestaurant,
  useGetRestaurant,
  useUpdateRestaurant,
} from "@/api/restaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreatingLoading } =
    useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateRestaurant();

  const isEditing = !!restaurant;

  return (
    <ManageRestaurantForm
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreatingLoading || isUpdateLoading}
      restaurant={restaurant}
    />
  );
};

export default ManageRestaurantPage;
