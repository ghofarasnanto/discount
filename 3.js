const ArkFood = (price, voucher, distance, withTax) => {
    if (typeof(price) !== 'number') {
        return 'Data Price Harus Number';
    }
    if (typeof(voucher) !== 'string') {
        return 'Data Voucher Harus String';
    }
    if (typeof(distance) !== 'number') {
        return 'Data Distance Harus Number';
    }
    if (typeof(withTax) !== 'boolean') {
        return 'Data Tax Harus True/False';
    }

    const discount = voucherDiscount(price, voucher);
    const delivery = deliveryFee(distance);
    const tax = taxFee(price, withTax);
    const subTotal = (price - discount) + (delivery + tax);
    return `Harga: ${price} \nPotongan: ${discount}\nBiaya Antar: ${delivery}\nPajak: ${tax}\nSub Total: ${subTotal}`;
}

const voucherDiscount = (price, voucherName) => {
    if (voucherName == "ARKAFOOD5") {
        const maxDiscount = 50000;
        const minPrice = 50000;
        if (price < minPrice) {
            console.log(`BELANJA MINIMAL ${minPrice} UNTUK VOUCHER "${voucherName}"`);
            return 0;
        } else {
            const discount = price * (50 / 100);
            // 50.000 * 50% = 25.000
            if (discount > maxDiscount) {
                console.log(`MAKSIMAL POTONGAN HARGA ${maxDiscount} UNTUK VOUCHER "${voucherName}"`);
                return maxDiscount;
            }
            return discount;
        }
    } else if (voucherName == "DITRAKTIRDEMY") {
        const maxDiscount = 30000;
        const minPrice = 25000;
        if (price < minPrice) {
            console.log(`BELANJA MINIMAL ${minPrice} UNTUK VOUCHER "${voucherName}"`);
            return 0;
        } else {
            const discount = price * (60 / 100);
            // 25.000 * 60% = 15.000
            if (discount > maxDiscount) {
                console.log(`MAKSIMAL POTONGAN HARGA ${maxDiscount} UNTUK VOUCHER "${voucherName}"`);
                return maxDiscount;
            }
            return discount;
        }
    } else {
        console.log("KODE VOUCHER INVALID");
    }
    return 0;
}

const deliveryFee = (distance) => {
    // misal distance 5km
    // 2km = 5000
    // 5 - 2 = 3km * 3000 = 9000
    // delivery fee = 9000 + 5000 = 14000
    const twoKMFee = 5000;
    const nextFee = (distance - 2) * 3000;
    if (distance <= 2) {
        return twoKMFee;
    }
    return twoKMFee + nextFee;
}

const taxFee = (price, withTax) => {
    if (withTax == true) {
        return price * (5 / 100);
    }
    return 0;
}

console.log(ArkFood(15000, "DITRAKTIRDEMY", 5, true));