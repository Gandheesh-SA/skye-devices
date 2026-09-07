-- Migration: Update allowed values for order status to support fulfillment lifecycle
-- Run this once in your Supabase SQL editor or psql

ALTER TABLE orders DROP CONSTRAINT IF EXISTS orders_status_check;

ALTER TABLE orders ADD CONSTRAINT orders_status_check 
  CHECK (status IN ('CREATED', 'PAID', 'CONFIRMED', 'SHIPPED', 'IN_TRANSIT', 'OUT_FOR_DELIVERY', 'DELIVERED', 'FAILED'));
