// This class will serve as a template for objects that represents
// each item entry in an inventory.
class InventoryItem {
    constructor(item_sku, item_name, item_type, item_quantity, 
                storage_location, supplier_information, item_cost,
                retail_price) {
        this.item_sku = item_sku;
        this.item_name = item_name;
        this.item_type = item_type;
        this.item_quantity = item_quantity;
        this.storage_location = storage_location;
        this.supplier_information = supplier_information;
        this.item_cost = item_cost;
        this.retail_price = retail_price;
    }
}