'use client';

import SearchBar from '@/components/search/search-bar';
import SearchWindow from '@/components/search/search-window';
import { UIDemos } from '@/components/search/ui-demo-questions';
import { User } from '@/lib/types';
import React from 'react';

export interface SearchPageProps {
    id: string;
    user: User;
}

export default function UIWindowWapper({ id, user }: SearchPageProps) {
    return (
        <SearchWindow
            id={id}
            user={user}
            initialMessages={[]}
            searchType="ui"
            demoQuestions={<UIDemos />}
            searchBar={({ handleSearch }) => (
                <SearchBar handleSearch={handleSearch} showIndexButton={false} showSourceSelection={false} showModelSelection={false} showWebSearch={true} />
            )}
        />
    );
}