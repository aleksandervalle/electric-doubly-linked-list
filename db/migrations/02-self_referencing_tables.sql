-- First, a SinglyLinkedNode table, for a one-way linked list (uuid pk)
CREATE TABLE IF NOT EXISTS singly_linked_nodes (
  uuid UUID PRIMARY KEY NOT NULL,
  next_node UUID REFERENCES singly_linked_nodes(uuid)
);

-- then, a DoublyLinkedNode table, for a two-way linked list (uuid pk)
CREATE TABLE IF NOT EXISTS doubly_linked_nodes (
  uuid UUID PRIMARY KEY NOT NULL,
  next_node UUID REFERENCES doubly_linked_nodes(uuid),
  prev_node UUID REFERENCES doubly_linked_nodes(uuid)
);

-- ⚡
ALTER TABLE singly_linked_nodes ENABLE ELECTRIC;
ALTER TABLE doubly_linked_nodes ENABLE ELECTRIC;
