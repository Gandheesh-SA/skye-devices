-- Migration: Add extended customer + address fields to orders table
-- Run this once in your Supabase SQL editor or psql

ALTER TABLE orders
  ADD COLUMN IF NOT EXISTS customer_age        TEXT,
  ADD COLUMN IF NOT EXISTS customer_occupation TEXT,
  ADD COLUMN IF NOT EXISTS address_line1       TEXT,
  ADD COLUMN IF NOT EXISTS address_line2       TEXT,
  ADD COLUMN IF NOT EXISTS city                TEXT,
  ADD COLUMN IF NOT EXISTS state               TEXT,
  ADD COLUMN IF NOT EXISTS pincode             TEXT,
  ADD COLUMN IF NOT EXISTS country             TEXT DEFAULT 'India';
