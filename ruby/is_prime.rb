def is_prime num
    div=2
    while div*div<=num
        if num%div==0
            return false
        end
    div=div+1
    end
    return true
end

# a= is_prime 8
# puts "number is "+ a.to_s;


def print_all_primes num

    for i in (2..num).step 2
        is_status=is_prime i
        if is_status
            puts i
        end
    end

end

print_all_primes 8