# Unexpected Navigation Behavior with useNavigate in useEffect

This repository demonstrates a potential issue in React Router Dom v6 when using the `useNavigate` hook within a `useEffect` hook that lacks dependencies.  The problem arises when navigation occurs on every render, potentially resulting in an infinite loop or unpredictable navigation.

## Problem

Navigating with `useNavigate` inside an effect without dependencies triggers the navigation on every render, which then causes a re-render, leading to continuous navigation. This is particularly problematic when performing operations like redirects after a successful API call. The component continuously re-renders, triggering the API call and navigation repeatedly.

## Solution

To resolve this, ensure that the `useEffect` hook includes the necessary dependencies to trigger the navigation only when appropriate. For instance, using the state variable that changes after a successful API call as a dependency prevents unnecessary navigation and solves the infinite rendering issue.