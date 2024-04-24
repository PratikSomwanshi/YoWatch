import { getSession } from "@/actions/userActions";
import Link from "next/link";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

async function AccountButton() {
    const session = await getSession();

    return (
        <section>
            {!session.isLoggedIn ? (
                <div>
                    <Link href="/">Account</Link>
                </div>
            ) : (
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            Hi, {session.userName}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            )}
        </section>
    );
}

export default AccountButton;
