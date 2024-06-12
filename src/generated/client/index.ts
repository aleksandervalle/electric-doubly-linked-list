import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';
import pgMigrations from './pg-migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const Doubly_linked_nodesScalarFieldEnumSchema = z.enum(['uuid','next_node','prev_node']);

export const ItemsScalarFieldEnumSchema = z.enum(['value']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const Singly_linked_nodesScalarFieldEnumSchema = z.enum(['uuid','next_node']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// DOUBLY LINKED NODES SCHEMA
/////////////////////////////////////////

export const Doubly_linked_nodesSchema = z.object({
  uuid: z.string().uuid(),
  next_node: z.string().uuid().nullable(),
  prev_node: z.string().uuid().nullable(),
})

export type Doubly_linked_nodes = z.infer<typeof Doubly_linked_nodesSchema>

/////////////////////////////////////////
// ITEMS SCHEMA
/////////////////////////////////////////

export const ItemsSchema = z.object({
  value: z.string(),
})

export type Items = z.infer<typeof ItemsSchema>

/////////////////////////////////////////
// SINGLY LINKED NODES SCHEMA
/////////////////////////////////////////

export const Singly_linked_nodesSchema = z.object({
  uuid: z.string().uuid(),
  next_node: z.string().uuid().nullable(),
})

export type Singly_linked_nodes = z.infer<typeof Singly_linked_nodesSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// DOUBLY LINKED NODES
//------------------------------------------------------

export const Doubly_linked_nodesIncludeSchema: z.ZodType<Prisma.Doubly_linked_nodesInclude> = z.object({
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.union([z.boolean(),z.lazy(() => Doubly_linked_nodesArgsSchema)]).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.union([z.boolean(),z.lazy(() => Doubly_linked_nodesFindManyArgsSchema)]).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.union([z.boolean(),z.lazy(() => Doubly_linked_nodesArgsSchema)]).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.union([z.boolean(),z.lazy(() => Doubly_linked_nodesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Doubly_linked_nodesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const Doubly_linked_nodesArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesArgs> = z.object({
  select: z.lazy(() => Doubly_linked_nodesSelectSchema).optional(),
  include: z.lazy(() => Doubly_linked_nodesIncludeSchema).optional(),
}).strict();

export const Doubly_linked_nodesCountOutputTypeArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesCountOutputTypeArgs> = z.object({
  select: z.lazy(() => Doubly_linked_nodesCountOutputTypeSelectSchema).nullish(),
}).strict();

export const Doubly_linked_nodesCountOutputTypeSelectSchema: z.ZodType<Prisma.Doubly_linked_nodesCountOutputTypeSelect> = z.object({
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.boolean().optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.boolean().optional(),
}).strict();

export const Doubly_linked_nodesSelectSchema: z.ZodType<Prisma.Doubly_linked_nodesSelect> = z.object({
  uuid: z.boolean().optional(),
  next_node: z.boolean().optional(),
  prev_node: z.boolean().optional(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.union([z.boolean(),z.lazy(() => Doubly_linked_nodesArgsSchema)]).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.union([z.boolean(),z.lazy(() => Doubly_linked_nodesFindManyArgsSchema)]).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.union([z.boolean(),z.lazy(() => Doubly_linked_nodesArgsSchema)]).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.union([z.boolean(),z.lazy(() => Doubly_linked_nodesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Doubly_linked_nodesCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ITEMS
//------------------------------------------------------

export const ItemsSelectSchema: z.ZodType<Prisma.ItemsSelect> = z.object({
  value: z.boolean().optional(),
}).strict()

// SINGLY LINKED NODES
//------------------------------------------------------

export const Singly_linked_nodesIncludeSchema: z.ZodType<Prisma.Singly_linked_nodesInclude> = z.object({
  singly_linked_nodes: z.union([z.boolean(),z.lazy(() => Singly_linked_nodesArgsSchema)]).optional(),
  other_singly_linked_nodes: z.union([z.boolean(),z.lazy(() => Singly_linked_nodesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Singly_linked_nodesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const Singly_linked_nodesArgsSchema: z.ZodType<Prisma.Singly_linked_nodesArgs> = z.object({
  select: z.lazy(() => Singly_linked_nodesSelectSchema).optional(),
  include: z.lazy(() => Singly_linked_nodesIncludeSchema).optional(),
}).strict();

export const Singly_linked_nodesCountOutputTypeArgsSchema: z.ZodType<Prisma.Singly_linked_nodesCountOutputTypeArgs> = z.object({
  select: z.lazy(() => Singly_linked_nodesCountOutputTypeSelectSchema).nullish(),
}).strict();

export const Singly_linked_nodesCountOutputTypeSelectSchema: z.ZodType<Prisma.Singly_linked_nodesCountOutputTypeSelect> = z.object({
  other_singly_linked_nodes: z.boolean().optional(),
}).strict();

export const Singly_linked_nodesSelectSchema: z.ZodType<Prisma.Singly_linked_nodesSelect> = z.object({
  uuid: z.boolean().optional(),
  next_node: z.boolean().optional(),
  singly_linked_nodes: z.union([z.boolean(),z.lazy(() => Singly_linked_nodesArgsSchema)]).optional(),
  other_singly_linked_nodes: z.union([z.boolean(),z.lazy(() => Singly_linked_nodesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => Singly_linked_nodesCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const Doubly_linked_nodesWhereInputSchema: z.ZodType<Prisma.Doubly_linked_nodesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Doubly_linked_nodesWhereInputSchema),z.lazy(() => Doubly_linked_nodesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Doubly_linked_nodesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Doubly_linked_nodesWhereInputSchema),z.lazy(() => Doubly_linked_nodesWhereInputSchema).array() ]).optional(),
  uuid: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  next_node: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  prev_node: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.union([ z.lazy(() => Doubly_linked_nodesRelationFilterSchema),z.lazy(() => Doubly_linked_nodesWhereInputSchema) ]).optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesListRelationFilterSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.union([ z.lazy(() => Doubly_linked_nodesRelationFilterSchema),z.lazy(() => Doubly_linked_nodesWhereInputSchema) ]).optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesListRelationFilterSchema).optional()
}).strict();

export const Doubly_linked_nodesOrderByWithRelationInputSchema: z.ZodType<Prisma.Doubly_linked_nodesOrderByWithRelationInput> = z.object({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  next_node: z.lazy(() => SortOrderSchema).optional(),
  prev_node: z.lazy(() => SortOrderSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesOrderByWithRelationInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesOrderByRelationAggregateInputSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesOrderByWithRelationInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesOrderByRelationAggregateInputSchema).optional()
}).strict();

export const Doubly_linked_nodesWhereUniqueInputSchema: z.ZodType<Prisma.Doubly_linked_nodesWhereUniqueInput> = z.object({
  uuid: z.string().uuid().optional()
}).strict();

export const Doubly_linked_nodesOrderByWithAggregationInputSchema: z.ZodType<Prisma.Doubly_linked_nodesOrderByWithAggregationInput> = z.object({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  next_node: z.lazy(() => SortOrderSchema).optional(),
  prev_node: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Doubly_linked_nodesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Doubly_linked_nodesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Doubly_linked_nodesMinOrderByAggregateInputSchema).optional()
}).strict();

export const Doubly_linked_nodesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Doubly_linked_nodesScalarWhereWithAggregatesInputSchema),z.lazy(() => Doubly_linked_nodesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Doubly_linked_nodesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Doubly_linked_nodesScalarWhereWithAggregatesInputSchema),z.lazy(() => Doubly_linked_nodesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  uuid: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  next_node: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  prev_node: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ItemsWhereInputSchema: z.ZodType<Prisma.ItemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ItemsWhereInputSchema),z.lazy(() => ItemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ItemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ItemsWhereInputSchema),z.lazy(() => ItemsWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ItemsOrderByWithRelationInputSchema: z.ZodType<Prisma.ItemsOrderByWithRelationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsWhereUniqueInputSchema: z.ZodType<Prisma.ItemsWhereUniqueInput> = z.object({
  value: z.string().optional()
}).strict();

export const ItemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ItemsOrderByWithAggregationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ItemsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ItemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ItemsMinOrderByAggregateInputSchema).optional()
}).strict();

export const ItemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ItemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const Singly_linked_nodesWhereInputSchema: z.ZodType<Prisma.Singly_linked_nodesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Singly_linked_nodesWhereInputSchema),z.lazy(() => Singly_linked_nodesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Singly_linked_nodesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Singly_linked_nodesWhereInputSchema),z.lazy(() => Singly_linked_nodesWhereInputSchema).array() ]).optional(),
  uuid: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  next_node: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  singly_linked_nodes: z.union([ z.lazy(() => Singly_linked_nodesRelationFilterSchema),z.lazy(() => Singly_linked_nodesWhereInputSchema) ]).optional().nullable(),
  other_singly_linked_nodes: z.lazy(() => Singly_linked_nodesListRelationFilterSchema).optional()
}).strict();

export const Singly_linked_nodesOrderByWithRelationInputSchema: z.ZodType<Prisma.Singly_linked_nodesOrderByWithRelationInput> = z.object({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  next_node: z.lazy(() => SortOrderSchema).optional(),
  singly_linked_nodes: z.lazy(() => Singly_linked_nodesOrderByWithRelationInputSchema).optional(),
  other_singly_linked_nodes: z.lazy(() => Singly_linked_nodesOrderByRelationAggregateInputSchema).optional()
}).strict();

export const Singly_linked_nodesWhereUniqueInputSchema: z.ZodType<Prisma.Singly_linked_nodesWhereUniqueInput> = z.object({
  uuid: z.string().uuid().optional()
}).strict();

export const Singly_linked_nodesOrderByWithAggregationInputSchema: z.ZodType<Prisma.Singly_linked_nodesOrderByWithAggregationInput> = z.object({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  next_node: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Singly_linked_nodesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Singly_linked_nodesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Singly_linked_nodesMinOrderByAggregateInputSchema).optional()
}).strict();

export const Singly_linked_nodesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Singly_linked_nodesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Singly_linked_nodesScalarWhereWithAggregatesInputSchema),z.lazy(() => Singly_linked_nodesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Singly_linked_nodesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Singly_linked_nodesScalarWhereWithAggregatesInputSchema),z.lazy(() => Singly_linked_nodesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  uuid: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  next_node: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Doubly_linked_nodesCreateInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateInput> = z.object({
  uuid: z.string().uuid(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedCreateInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedCreateInput> = z.object({
  uuid: z.string().uuid(),
  next_node: z.string().uuid().optional().nullable(),
  prev_node: z.string().uuid().optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUpdateInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedUpdateInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedUpdateInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  next_node: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prev_node: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Doubly_linked_nodesCreateManyInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateManyInput> = z.object({
  uuid: z.string().uuid(),
  next_node: z.string().uuid().optional().nullable(),
  prev_node: z.string().uuid().optional().nullable()
}).strict();

export const Doubly_linked_nodesUpdateManyMutationInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateManyMutationInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Doubly_linked_nodesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedUpdateManyInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  next_node: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prev_node: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ItemsCreateInputSchema: z.ZodType<Prisma.ItemsCreateInput> = z.object({
  value: z.string()
}).strict();

export const ItemsUncheckedCreateInputSchema: z.ZodType<Prisma.ItemsUncheckedCreateInput> = z.object({
  value: z.string()
}).strict();

export const ItemsUpdateInputSchema: z.ZodType<Prisma.ItemsUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsUncheckedUpdateInputSchema: z.ZodType<Prisma.ItemsUncheckedUpdateInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsCreateManyInputSchema: z.ZodType<Prisma.ItemsCreateManyInput> = z.object({
  value: z.string()
}).strict();

export const ItemsUpdateManyMutationInputSchema: z.ZodType<Prisma.ItemsUpdateManyMutationInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ItemsUncheckedUpdateManyInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Singly_linked_nodesCreateInputSchema: z.ZodType<Prisma.Singly_linked_nodesCreateInput> = z.object({
  uuid: z.string().uuid(),
  singly_linked_nodes: z.lazy(() => Singly_linked_nodesCreateNestedOneWithoutOther_singly_linked_nodesInputSchema).optional(),
  other_singly_linked_nodes: z.lazy(() => Singly_linked_nodesCreateNestedManyWithoutSingly_linked_nodesInputSchema).optional()
}).strict();

export const Singly_linked_nodesUncheckedCreateInputSchema: z.ZodType<Prisma.Singly_linked_nodesUncheckedCreateInput> = z.object({
  uuid: z.string().uuid(),
  next_node: z.string().uuid().optional().nullable(),
  other_singly_linked_nodes: z.lazy(() => Singly_linked_nodesUncheckedCreateNestedManyWithoutSingly_linked_nodesInputSchema).optional()
}).strict();

export const Singly_linked_nodesUpdateInputSchema: z.ZodType<Prisma.Singly_linked_nodesUpdateInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  singly_linked_nodes: z.lazy(() => Singly_linked_nodesUpdateOneWithoutOther_singly_linked_nodesNestedInputSchema).optional(),
  other_singly_linked_nodes: z.lazy(() => Singly_linked_nodesUpdateManyWithoutSingly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Singly_linked_nodesUncheckedUpdateInputSchema: z.ZodType<Prisma.Singly_linked_nodesUncheckedUpdateInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  next_node: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  other_singly_linked_nodes: z.lazy(() => Singly_linked_nodesUncheckedUpdateManyWithoutSingly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Singly_linked_nodesCreateManyInputSchema: z.ZodType<Prisma.Singly_linked_nodesCreateManyInput> = z.object({
  uuid: z.string().uuid(),
  next_node: z.string().uuid().optional().nullable()
}).strict();

export const Singly_linked_nodesUpdateManyMutationInputSchema: z.ZodType<Prisma.Singly_linked_nodesUpdateManyMutationInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Singly_linked_nodesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Singly_linked_nodesUncheckedUpdateManyInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  next_node: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const UuidNullableFilterSchema: z.ZodType<Prisma.UuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const Doubly_linked_nodesRelationFilterSchema: z.ZodType<Prisma.Doubly_linked_nodesRelationFilter> = z.object({
  is: z.lazy(() => Doubly_linked_nodesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => Doubly_linked_nodesWhereInputSchema).optional().nullable()
}).strict();

export const Doubly_linked_nodesListRelationFilterSchema: z.ZodType<Prisma.Doubly_linked_nodesListRelationFilter> = z.object({
  every: z.lazy(() => Doubly_linked_nodesWhereInputSchema).optional(),
  some: z.lazy(() => Doubly_linked_nodesWhereInputSchema).optional(),
  none: z.lazy(() => Doubly_linked_nodesWhereInputSchema).optional()
}).strict();

export const Doubly_linked_nodesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Doubly_linked_nodesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Doubly_linked_nodesCountOrderByAggregateInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCountOrderByAggregateInput> = z.object({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  next_node: z.lazy(() => SortOrderSchema).optional(),
  prev_node: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Doubly_linked_nodesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Doubly_linked_nodesMaxOrderByAggregateInput> = z.object({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  next_node: z.lazy(() => SortOrderSchema).optional(),
  prev_node: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Doubly_linked_nodesMinOrderByAggregateInputSchema: z.ZodType<Prisma.Doubly_linked_nodesMinOrderByAggregateInput> = z.object({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  next_node: z.lazy(() => SortOrderSchema).optional(),
  prev_node: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const UuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const ItemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsCountOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsMaxOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsMinOrderByAggregateInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const Singly_linked_nodesRelationFilterSchema: z.ZodType<Prisma.Singly_linked_nodesRelationFilter> = z.object({
  is: z.lazy(() => Singly_linked_nodesWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => Singly_linked_nodesWhereInputSchema).optional().nullable()
}).strict();

export const Singly_linked_nodesListRelationFilterSchema: z.ZodType<Prisma.Singly_linked_nodesListRelationFilter> = z.object({
  every: z.lazy(() => Singly_linked_nodesWhereInputSchema).optional(),
  some: z.lazy(() => Singly_linked_nodesWhereInputSchema).optional(),
  none: z.lazy(() => Singly_linked_nodesWhereInputSchema).optional()
}).strict();

export const Singly_linked_nodesOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Singly_linked_nodesOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Singly_linked_nodesCountOrderByAggregateInputSchema: z.ZodType<Prisma.Singly_linked_nodesCountOrderByAggregateInput> = z.object({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  next_node: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Singly_linked_nodesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Singly_linked_nodesMaxOrderByAggregateInput> = z.object({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  next_node: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Singly_linked_nodesMinOrderByAggregateInputSchema: z.ZodType<Prisma.Singly_linked_nodesMinOrderByAggregateInput> = z.object({
  uuid: z.lazy(() => SortOrderSchema).optional(),
  next_node: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  connect: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).optional()
}).strict();

export const Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array(),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional(),
  connect: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).optional()
}).strict();

export const Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array(),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array(),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array(),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  upsert: z.lazy(() => Doubly_linked_nodesUpsertWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]).optional(),
}).strict();

export const Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array(),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema),z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional(),
  upsert: z.lazy(() => Doubly_linked_nodesUpsertWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]).optional(),
}).strict();

export const Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array(),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema),z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array(),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema),z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array(),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema),z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Singly_linked_nodesCreateNestedOneWithoutOther_singly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesCreateNestedOneWithoutOther_singly_linked_nodesInput> = z.object({
  create: z.union([ z.lazy(() => Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Singly_linked_nodesCreateOrConnectWithoutOther_singly_linked_nodesInputSchema).optional(),
  connect: z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).optional()
}).strict();

export const Singly_linked_nodesCreateNestedManyWithoutSingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesCreateNestedManyWithoutSingly_linked_nodesInput> = z.object({
  create: z.union([ z.lazy(() => Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema).array(),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Singly_linked_nodesUncheckedCreateNestedManyWithoutSingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUncheckedCreateNestedManyWithoutSingly_linked_nodesInput> = z.object({
  create: z.union([ z.lazy(() => Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema).array(),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Singly_linked_nodesUpdateOneWithoutOther_singly_linked_nodesNestedInputSchema: z.ZodType<Prisma.Singly_linked_nodesUpdateOneWithoutOther_singly_linked_nodesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => Singly_linked_nodesCreateOrConnectWithoutOther_singly_linked_nodesInputSchema).optional(),
  upsert: z.lazy(() => Singly_linked_nodesUpsertWithoutOther_singly_linked_nodesInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => Singly_linked_nodesUpdateWithoutOther_singly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedUpdateWithoutOther_singly_linked_nodesInputSchema) ]).optional(),
}).strict();

export const Singly_linked_nodesUpdateManyWithoutSingly_linked_nodesNestedInputSchema: z.ZodType<Prisma.Singly_linked_nodesUpdateManyWithoutSingly_linked_nodesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema).array(),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Singly_linked_nodesUpsertWithWhereUniqueWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUpsertWithWhereUniqueWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Singly_linked_nodesUpdateWithWhereUniqueWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUpdateWithWhereUniqueWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Singly_linked_nodesUpdateManyWithWhereWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUpdateManyWithWhereWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Singly_linked_nodesScalarWhereInputSchema),z.lazy(() => Singly_linked_nodesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Singly_linked_nodesUncheckedUpdateManyWithoutSingly_linked_nodesNestedInputSchema: z.ZodType<Prisma.Singly_linked_nodesUncheckedUpdateManyWithoutSingly_linked_nodesNestedInput> = z.object({
  create: z.union([ z.lazy(() => Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema).array(),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Singly_linked_nodesUpsertWithWhereUniqueWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUpsertWithWhereUniqueWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Singly_linked_nodesUpdateWithWhereUniqueWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUpdateWithWhereUniqueWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Singly_linked_nodesUpdateManyWithWhereWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUpdateManyWithWhereWithoutSingly_linked_nodesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Singly_linked_nodesScalarWhereInputSchema),z.lazy(() => Singly_linked_nodesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedUuidNullableFilterSchema: z.ZodType<Prisma.NestedUuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedUuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.string(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.string(),
  next_node: z.string().optional().nullable(),
  prev_node: z.string().optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional()
}).strict();

export const Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  where: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.string(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.string(),
  prev_node: z.string().optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional()
}).strict();

export const Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  where: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelopeSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputEnvelope> = z.object({
  data: z.lazy(() => Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.string(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.string(),
  next_node: z.string().optional().nullable(),
  prev_node: z.string().optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional()
}).strict();

export const Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateOrConnectWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  where: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.string(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.string(),
  next_node: z.string().optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedCreateNestedManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).optional()
}).strict();

export const Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateOrConnectWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  where: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelopeSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputEnvelope> = z.object({
  data: z.lazy(() => Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Doubly_linked_nodesUpsertWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpsertWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  update: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]),
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  next_node: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prev_node: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  where: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]),
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  where: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  where: z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Doubly_linked_nodesUpdateManyMutationInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedUpdateManyWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesScalarWhereInputSchema: z.ZodType<Prisma.Doubly_linked_nodesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema),z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema),z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema).array() ]).optional(),
  uuid: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  next_node: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  prev_node: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Doubly_linked_nodesUpsertWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpsertWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  update: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]),
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedUpdateWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  next_node: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  prev_node: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpsertWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  where: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]),
  create: z.union([ z.lazy(() => Doubly_linked_nodesCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedCreateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateWithWhereUniqueWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  where: z.lazy(() => Doubly_linked_nodesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateManyWithWhereWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  where: z.lazy(() => Doubly_linked_nodesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Doubly_linked_nodesUpdateManyMutationInputSchema),z.lazy(() => Doubly_linked_nodesUncheckedUpdateManyWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema) ]),
}).strict();

export const Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInput> = z.object({
  uuid: z.string(),
  singly_linked_nodes: z.lazy(() => Singly_linked_nodesCreateNestedOneWithoutOther_singly_linked_nodesInputSchema).optional()
}).strict();

export const Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInput> = z.object({
  uuid: z.string(),
  next_node: z.string().optional().nullable()
}).strict();

export const Singly_linked_nodesCreateOrConnectWithoutOther_singly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesCreateOrConnectWithoutOther_singly_linked_nodesInput> = z.object({
  where: z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInputSchema) ]),
}).strict();

export const Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesCreateWithoutSingly_linked_nodesInput> = z.object({
  uuid: z.string(),
  other_singly_linked_nodes: z.lazy(() => Singly_linked_nodesCreateNestedManyWithoutSingly_linked_nodesInputSchema).optional()
}).strict();

export const Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInput> = z.object({
  uuid: z.string(),
  other_singly_linked_nodes: z.lazy(() => Singly_linked_nodesUncheckedCreateNestedManyWithoutSingly_linked_nodesInputSchema).optional()
}).strict();

export const Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesCreateOrConnectWithoutSingly_linked_nodesInput> = z.object({
  where: z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema) ]),
}).strict();

export const Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelopeSchema: z.ZodType<Prisma.Singly_linked_nodesCreateManySingly_linked_nodesInputEnvelope> = z.object({
  data: z.lazy(() => Singly_linked_nodesCreateManySingly_linked_nodesInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Singly_linked_nodesUpsertWithoutOther_singly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUpsertWithoutOther_singly_linked_nodesInput> = z.object({
  update: z.union([ z.lazy(() => Singly_linked_nodesUpdateWithoutOther_singly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedUpdateWithoutOther_singly_linked_nodesInputSchema) ]),
  create: z.union([ z.lazy(() => Singly_linked_nodesCreateWithoutOther_singly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutOther_singly_linked_nodesInputSchema) ]),
}).strict();

export const Singly_linked_nodesUpdateWithoutOther_singly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUpdateWithoutOther_singly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  singly_linked_nodes: z.lazy(() => Singly_linked_nodesUpdateOneWithoutOther_singly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Singly_linked_nodesUncheckedUpdateWithoutOther_singly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUncheckedUpdateWithoutOther_singly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  next_node: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Singly_linked_nodesUpsertWithWhereUniqueWithoutSingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUpsertWithWhereUniqueWithoutSingly_linked_nodesInput> = z.object({
  where: z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Singly_linked_nodesUpdateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedUpdateWithoutSingly_linked_nodesInputSchema) ]),
  create: z.union([ z.lazy(() => Singly_linked_nodesCreateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedCreateWithoutSingly_linked_nodesInputSchema) ]),
}).strict();

export const Singly_linked_nodesUpdateWithWhereUniqueWithoutSingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUpdateWithWhereUniqueWithoutSingly_linked_nodesInput> = z.object({
  where: z.lazy(() => Singly_linked_nodesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Singly_linked_nodesUpdateWithoutSingly_linked_nodesInputSchema),z.lazy(() => Singly_linked_nodesUncheckedUpdateWithoutSingly_linked_nodesInputSchema) ]),
}).strict();

export const Singly_linked_nodesUpdateManyWithWhereWithoutSingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUpdateManyWithWhereWithoutSingly_linked_nodesInput> = z.object({
  where: z.lazy(() => Singly_linked_nodesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Singly_linked_nodesUpdateManyMutationInputSchema),z.lazy(() => Singly_linked_nodesUncheckedUpdateManyWithoutOther_singly_linked_nodesInputSchema) ]),
}).strict();

export const Singly_linked_nodesScalarWhereInputSchema: z.ZodType<Prisma.Singly_linked_nodesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Singly_linked_nodesScalarWhereInputSchema),z.lazy(() => Singly_linked_nodesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Singly_linked_nodesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Singly_linked_nodesScalarWhereInputSchema),z.lazy(() => Singly_linked_nodesScalarWhereInputSchema).array() ]).optional(),
  uuid: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  next_node: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.string().uuid(),
  prev_node: z.string().uuid().optional().nullable()
}).strict();

export const Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateManyDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.string().uuid(),
  next_node: z.string().uuid().optional().nullable()
}).strict();

export const Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prev_node: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedUpdateManyWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedUpdateManyWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prev_node: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateOneWithoutOther_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedUpdateWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  next_node: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodesNestedInputSchema).optional(),
  other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes: z.lazy(() => Doubly_linked_nodesUncheckedUpdateManyWithoutDoubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Doubly_linked_nodesUncheckedUpdateManyWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInputSchema: z.ZodType<Prisma.Doubly_linked_nodesUncheckedUpdateManyWithoutOther_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  next_node: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Singly_linked_nodesCreateManySingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesCreateManySingly_linked_nodesInput> = z.object({
  uuid: z.string().uuid()
}).strict();

export const Singly_linked_nodesUpdateWithoutSingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUpdateWithoutSingly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  other_singly_linked_nodes: z.lazy(() => Singly_linked_nodesUpdateManyWithoutSingly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Singly_linked_nodesUncheckedUpdateWithoutSingly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUncheckedUpdateWithoutSingly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  other_singly_linked_nodes: z.lazy(() => Singly_linked_nodesUncheckedUpdateManyWithoutSingly_linked_nodesNestedInputSchema).optional()
}).strict();

export const Singly_linked_nodesUncheckedUpdateManyWithoutOther_singly_linked_nodesInputSchema: z.ZodType<Prisma.Singly_linked_nodesUncheckedUpdateManyWithoutOther_singly_linked_nodesInput> = z.object({
  uuid: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const Doubly_linked_nodesFindFirstArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesFindFirstArgs> = z.object({
  select: Doubly_linked_nodesSelectSchema.optional(),
  include: Doubly_linked_nodesIncludeSchema.optional(),
  where: Doubly_linked_nodesWhereInputSchema.optional(),
  orderBy: z.union([ Doubly_linked_nodesOrderByWithRelationInputSchema.array(),Doubly_linked_nodesOrderByWithRelationInputSchema ]).optional(),
  cursor: Doubly_linked_nodesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Doubly_linked_nodesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesFindFirstArgs>

export const Doubly_linked_nodesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesFindFirstOrThrowArgs> = z.object({
  select: Doubly_linked_nodesSelectSchema.optional(),
  include: Doubly_linked_nodesIncludeSchema.optional(),
  where: Doubly_linked_nodesWhereInputSchema.optional(),
  orderBy: z.union([ Doubly_linked_nodesOrderByWithRelationInputSchema.array(),Doubly_linked_nodesOrderByWithRelationInputSchema ]).optional(),
  cursor: Doubly_linked_nodesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Doubly_linked_nodesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesFindFirstOrThrowArgs>

export const Doubly_linked_nodesFindManyArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesFindManyArgs> = z.object({
  select: Doubly_linked_nodesSelectSchema.optional(),
  include: Doubly_linked_nodesIncludeSchema.optional(),
  where: Doubly_linked_nodesWhereInputSchema.optional(),
  orderBy: z.union([ Doubly_linked_nodesOrderByWithRelationInputSchema.array(),Doubly_linked_nodesOrderByWithRelationInputSchema ]).optional(),
  cursor: Doubly_linked_nodesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Doubly_linked_nodesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesFindManyArgs>

export const Doubly_linked_nodesAggregateArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesAggregateArgs> = z.object({
  where: Doubly_linked_nodesWhereInputSchema.optional(),
  orderBy: z.union([ Doubly_linked_nodesOrderByWithRelationInputSchema.array(),Doubly_linked_nodesOrderByWithRelationInputSchema ]).optional(),
  cursor: Doubly_linked_nodesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesAggregateArgs>

export const Doubly_linked_nodesGroupByArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesGroupByArgs> = z.object({
  where: Doubly_linked_nodesWhereInputSchema.optional(),
  orderBy: z.union([ Doubly_linked_nodesOrderByWithAggregationInputSchema.array(),Doubly_linked_nodesOrderByWithAggregationInputSchema ]).optional(),
  by: Doubly_linked_nodesScalarFieldEnumSchema.array(),
  having: Doubly_linked_nodesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesGroupByArgs>

export const Doubly_linked_nodesFindUniqueArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesFindUniqueArgs> = z.object({
  select: Doubly_linked_nodesSelectSchema.optional(),
  include: Doubly_linked_nodesIncludeSchema.optional(),
  where: Doubly_linked_nodesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesFindUniqueArgs>

export const Doubly_linked_nodesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesFindUniqueOrThrowArgs> = z.object({
  select: Doubly_linked_nodesSelectSchema.optional(),
  include: Doubly_linked_nodesIncludeSchema.optional(),
  where: Doubly_linked_nodesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesFindUniqueOrThrowArgs>

export const ItemsFindFirstArgsSchema: z.ZodType<Prisma.ItemsFindFirstArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ItemsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ItemsFindFirstOrThrowArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ItemsFindManyArgsSchema: z.ZodType<Prisma.ItemsFindManyArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() 

export const ItemsAggregateArgsSchema: z.ZodType<Prisma.ItemsAggregateArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ItemsGroupByArgsSchema: z.ZodType<Prisma.ItemsGroupByArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithAggregationInputSchema.array(),ItemsOrderByWithAggregationInputSchema ]).optional(),
  by: ItemsScalarFieldEnumSchema.array(),
  having: ItemsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() 

export const ItemsFindUniqueArgsSchema: z.ZodType<Prisma.ItemsFindUniqueArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const ItemsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ItemsFindUniqueOrThrowArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const Singly_linked_nodesFindFirstArgsSchema: z.ZodType<Prisma.Singly_linked_nodesFindFirstArgs> = z.object({
  select: Singly_linked_nodesSelectSchema.optional(),
  include: Singly_linked_nodesIncludeSchema.optional(),
  where: Singly_linked_nodesWhereInputSchema.optional(),
  orderBy: z.union([ Singly_linked_nodesOrderByWithRelationInputSchema.array(),Singly_linked_nodesOrderByWithRelationInputSchema ]).optional(),
  cursor: Singly_linked_nodesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Singly_linked_nodesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Singly_linked_nodesFindFirstArgs>

export const Singly_linked_nodesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Singly_linked_nodesFindFirstOrThrowArgs> = z.object({
  select: Singly_linked_nodesSelectSchema.optional(),
  include: Singly_linked_nodesIncludeSchema.optional(),
  where: Singly_linked_nodesWhereInputSchema.optional(),
  orderBy: z.union([ Singly_linked_nodesOrderByWithRelationInputSchema.array(),Singly_linked_nodesOrderByWithRelationInputSchema ]).optional(),
  cursor: Singly_linked_nodesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Singly_linked_nodesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Singly_linked_nodesFindFirstOrThrowArgs>

export const Singly_linked_nodesFindManyArgsSchema: z.ZodType<Prisma.Singly_linked_nodesFindManyArgs> = z.object({
  select: Singly_linked_nodesSelectSchema.optional(),
  include: Singly_linked_nodesIncludeSchema.optional(),
  where: Singly_linked_nodesWhereInputSchema.optional(),
  orderBy: z.union([ Singly_linked_nodesOrderByWithRelationInputSchema.array(),Singly_linked_nodesOrderByWithRelationInputSchema ]).optional(),
  cursor: Singly_linked_nodesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Singly_linked_nodesScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Singly_linked_nodesFindManyArgs>

export const Singly_linked_nodesAggregateArgsSchema: z.ZodType<Prisma.Singly_linked_nodesAggregateArgs> = z.object({
  where: Singly_linked_nodesWhereInputSchema.optional(),
  orderBy: z.union([ Singly_linked_nodesOrderByWithRelationInputSchema.array(),Singly_linked_nodesOrderByWithRelationInputSchema ]).optional(),
  cursor: Singly_linked_nodesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Singly_linked_nodesAggregateArgs>

export const Singly_linked_nodesGroupByArgsSchema: z.ZodType<Prisma.Singly_linked_nodesGroupByArgs> = z.object({
  where: Singly_linked_nodesWhereInputSchema.optional(),
  orderBy: z.union([ Singly_linked_nodesOrderByWithAggregationInputSchema.array(),Singly_linked_nodesOrderByWithAggregationInputSchema ]).optional(),
  by: Singly_linked_nodesScalarFieldEnumSchema.array(),
  having: Singly_linked_nodesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Singly_linked_nodesGroupByArgs>

export const Singly_linked_nodesFindUniqueArgsSchema: z.ZodType<Prisma.Singly_linked_nodesFindUniqueArgs> = z.object({
  select: Singly_linked_nodesSelectSchema.optional(),
  include: Singly_linked_nodesIncludeSchema.optional(),
  where: Singly_linked_nodesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Singly_linked_nodesFindUniqueArgs>

export const Singly_linked_nodesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Singly_linked_nodesFindUniqueOrThrowArgs> = z.object({
  select: Singly_linked_nodesSelectSchema.optional(),
  include: Singly_linked_nodesIncludeSchema.optional(),
  where: Singly_linked_nodesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Singly_linked_nodesFindUniqueOrThrowArgs>

export const Doubly_linked_nodesCreateArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateArgs> = z.object({
  select: Doubly_linked_nodesSelectSchema.optional(),
  include: Doubly_linked_nodesIncludeSchema.optional(),
  data: z.union([ Doubly_linked_nodesCreateInputSchema,Doubly_linked_nodesUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesCreateArgs>

export const Doubly_linked_nodesUpsertArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesUpsertArgs> = z.object({
  select: Doubly_linked_nodesSelectSchema.optional(),
  include: Doubly_linked_nodesIncludeSchema.optional(),
  where: Doubly_linked_nodesWhereUniqueInputSchema,
  create: z.union([ Doubly_linked_nodesCreateInputSchema,Doubly_linked_nodesUncheckedCreateInputSchema ]),
  update: z.union([ Doubly_linked_nodesUpdateInputSchema,Doubly_linked_nodesUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesUpsertArgs>

export const Doubly_linked_nodesCreateManyArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesCreateManyArgs> = z.object({
  data: Doubly_linked_nodesCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesCreateManyArgs>

export const Doubly_linked_nodesDeleteArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesDeleteArgs> = z.object({
  select: Doubly_linked_nodesSelectSchema.optional(),
  include: Doubly_linked_nodesIncludeSchema.optional(),
  where: Doubly_linked_nodesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesDeleteArgs>

export const Doubly_linked_nodesUpdateArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateArgs> = z.object({
  select: Doubly_linked_nodesSelectSchema.optional(),
  include: Doubly_linked_nodesIncludeSchema.optional(),
  data: z.union([ Doubly_linked_nodesUpdateInputSchema,Doubly_linked_nodesUncheckedUpdateInputSchema ]),
  where: Doubly_linked_nodesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesUpdateArgs>

export const Doubly_linked_nodesUpdateManyArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesUpdateManyArgs> = z.object({
  data: z.union([ Doubly_linked_nodesUpdateManyMutationInputSchema,Doubly_linked_nodesUncheckedUpdateManyInputSchema ]),
  where: Doubly_linked_nodesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesUpdateManyArgs>

export const Doubly_linked_nodesDeleteManyArgsSchema: z.ZodType<Prisma.Doubly_linked_nodesDeleteManyArgs> = z.object({
  where: Doubly_linked_nodesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Doubly_linked_nodesDeleteManyArgs>

export const ItemsCreateArgsSchema: z.ZodType<Prisma.ItemsCreateArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  data: z.union([ ItemsCreateInputSchema,ItemsUncheckedCreateInputSchema ]),
}).strict() 

export const ItemsUpsertArgsSchema: z.ZodType<Prisma.ItemsUpsertArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
  create: z.union([ ItemsCreateInputSchema,ItemsUncheckedCreateInputSchema ]),
  update: z.union([ ItemsUpdateInputSchema,ItemsUncheckedUpdateInputSchema ]),
}).strict() 

export const ItemsCreateManyArgsSchema: z.ZodType<Prisma.ItemsCreateManyArgs> = z.object({
  data: ItemsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() 

export const ItemsDeleteArgsSchema: z.ZodType<Prisma.ItemsDeleteArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const ItemsUpdateArgsSchema: z.ZodType<Prisma.ItemsUpdateArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  data: z.union([ ItemsUpdateInputSchema,ItemsUncheckedUpdateInputSchema ]),
  where: ItemsWhereUniqueInputSchema,
}).strict() 

export const ItemsUpdateManyArgsSchema: z.ZodType<Prisma.ItemsUpdateManyArgs> = z.object({
  data: z.union([ ItemsUpdateManyMutationInputSchema,ItemsUncheckedUpdateManyInputSchema ]),
  where: ItemsWhereInputSchema.optional(),
}).strict() 

export const ItemsDeleteManyArgsSchema: z.ZodType<Prisma.ItemsDeleteManyArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
}).strict() 

export const Singly_linked_nodesCreateArgsSchema: z.ZodType<Prisma.Singly_linked_nodesCreateArgs> = z.object({
  select: Singly_linked_nodesSelectSchema.optional(),
  include: Singly_linked_nodesIncludeSchema.optional(),
  data: z.union([ Singly_linked_nodesCreateInputSchema,Singly_linked_nodesUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Singly_linked_nodesCreateArgs>

export const Singly_linked_nodesUpsertArgsSchema: z.ZodType<Prisma.Singly_linked_nodesUpsertArgs> = z.object({
  select: Singly_linked_nodesSelectSchema.optional(),
  include: Singly_linked_nodesIncludeSchema.optional(),
  where: Singly_linked_nodesWhereUniqueInputSchema,
  create: z.union([ Singly_linked_nodesCreateInputSchema,Singly_linked_nodesUncheckedCreateInputSchema ]),
  update: z.union([ Singly_linked_nodesUpdateInputSchema,Singly_linked_nodesUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Singly_linked_nodesUpsertArgs>

export const Singly_linked_nodesCreateManyArgsSchema: z.ZodType<Prisma.Singly_linked_nodesCreateManyArgs> = z.object({
  data: Singly_linked_nodesCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Singly_linked_nodesCreateManyArgs>

export const Singly_linked_nodesDeleteArgsSchema: z.ZodType<Prisma.Singly_linked_nodesDeleteArgs> = z.object({
  select: Singly_linked_nodesSelectSchema.optional(),
  include: Singly_linked_nodesIncludeSchema.optional(),
  where: Singly_linked_nodesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Singly_linked_nodesDeleteArgs>

export const Singly_linked_nodesUpdateArgsSchema: z.ZodType<Prisma.Singly_linked_nodesUpdateArgs> = z.object({
  select: Singly_linked_nodesSelectSchema.optional(),
  include: Singly_linked_nodesIncludeSchema.optional(),
  data: z.union([ Singly_linked_nodesUpdateInputSchema,Singly_linked_nodesUncheckedUpdateInputSchema ]),
  where: Singly_linked_nodesWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Singly_linked_nodesUpdateArgs>

export const Singly_linked_nodesUpdateManyArgsSchema: z.ZodType<Prisma.Singly_linked_nodesUpdateManyArgs> = z.object({
  data: z.union([ Singly_linked_nodesUpdateManyMutationInputSchema,Singly_linked_nodesUncheckedUpdateManyInputSchema ]),
  where: Singly_linked_nodesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Singly_linked_nodesUpdateManyArgs>

export const Singly_linked_nodesDeleteManyArgsSchema: z.ZodType<Prisma.Singly_linked_nodesDeleteManyArgs> = z.object({
  where: Singly_linked_nodesWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Singly_linked_nodesDeleteManyArgs>

interface Doubly_linked_nodesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Doubly_linked_nodesArgs
  readonly type: Omit<Prisma.Doubly_linked_nodesGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface ItemsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ItemsArgs
  readonly type: Omit<Prisma.ItemsGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

interface Singly_linked_nodesGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Singly_linked_nodesArgs
  readonly type: Omit<Prisma.Singly_linked_nodesGetPayload<this['_A']>, "Please either choose `select` or `include`">
}

export const tableSchemas = {
  doubly_linked_nodes: {
    fields: new Map([
      [
        "uuid",
        "UUID"
      ],
      [
        "next_node",
        "UUID"
      ],
      [
        "prev_node",
        "UUID"
      ]
    ]),
    relations: [
      new Relation("doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes", "next_node", "uuid", "doubly_linked_nodes", "doubly_linked_nodes_next_nodeTodoubly_linked_nodes", "one"),
      new Relation("other_doubly_linked_nodes_doubly_linked_nodes_next_nodeTodoubly_linked_nodes", "", "", "doubly_linked_nodes", "doubly_linked_nodes_next_nodeTodoubly_linked_nodes", "many"),
      new Relation("doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes", "prev_node", "uuid", "doubly_linked_nodes", "doubly_linked_nodes_prev_nodeTodoubly_linked_nodes", "one"),
      new Relation("other_doubly_linked_nodes_doubly_linked_nodes_prev_nodeTodoubly_linked_nodes", "", "", "doubly_linked_nodes", "doubly_linked_nodes_prev_nodeTodoubly_linked_nodes", "many"),
    ],
    modelSchema: (Doubly_linked_nodesCreateInputSchema as any)
      .partial()
      .or((Doubly_linked_nodesUncheckedCreateInputSchema as any).partial()),
    createSchema: Doubly_linked_nodesCreateArgsSchema,
    createManySchema: Doubly_linked_nodesCreateManyArgsSchema,
    findUniqueSchema: Doubly_linked_nodesFindUniqueArgsSchema,
    findSchema: Doubly_linked_nodesFindFirstArgsSchema,
    updateSchema: Doubly_linked_nodesUpdateArgsSchema,
    updateManySchema: Doubly_linked_nodesUpdateManyArgsSchema,
    upsertSchema: Doubly_linked_nodesUpsertArgsSchema,
    deleteSchema: Doubly_linked_nodesDeleteArgsSchema,
    deleteManySchema: Doubly_linked_nodesDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Doubly_linked_nodesUncheckedCreateInputSchema>,
    Prisma.Doubly_linked_nodesCreateArgs['data'],
    Prisma.Doubly_linked_nodesUpdateArgs['data'],
    Prisma.Doubly_linked_nodesFindFirstArgs['select'],
    Prisma.Doubly_linked_nodesFindFirstArgs['where'],
    Prisma.Doubly_linked_nodesFindUniqueArgs['where'],
    Omit<Prisma.Doubly_linked_nodesInclude, '_count'>,
    Prisma.Doubly_linked_nodesFindFirstArgs['orderBy'],
    Prisma.Doubly_linked_nodesScalarFieldEnum,
    Doubly_linked_nodesGetPayload
  >,
  items: {
    fields: new Map([
      [
        "value",
        "TEXT"
      ]
    ]),
    relations: [
    ],
    modelSchema: (ItemsCreateInputSchema as any)
      .partial()
      .or((ItemsUncheckedCreateInputSchema as any).partial()),
    createSchema: ItemsCreateArgsSchema,
    createManySchema: ItemsCreateManyArgsSchema,
    findUniqueSchema: ItemsFindUniqueArgsSchema,
    findSchema: ItemsFindFirstArgsSchema,
    updateSchema: ItemsUpdateArgsSchema,
    updateManySchema: ItemsUpdateManyArgsSchema,
    upsertSchema: ItemsUpsertArgsSchema,
    deleteSchema: ItemsDeleteArgsSchema,
    deleteManySchema: ItemsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ItemsUncheckedCreateInputSchema>,
    Prisma.ItemsCreateArgs['data'],
    Prisma.ItemsUpdateArgs['data'],
    Prisma.ItemsFindFirstArgs['select'],
    Prisma.ItemsFindFirstArgs['where'],
    Prisma.ItemsFindUniqueArgs['where'],
    never,
    Prisma.ItemsFindFirstArgs['orderBy'],
    Prisma.ItemsScalarFieldEnum,
    ItemsGetPayload
  >,
  singly_linked_nodes: {
    fields: new Map([
      [
        "uuid",
        "UUID"
      ],
      [
        "next_node",
        "UUID"
      ]
    ]),
    relations: [
      new Relation("singly_linked_nodes", "next_node", "uuid", "singly_linked_nodes", "singly_linked_nodesTosingly_linked_nodes", "one"),
      new Relation("other_singly_linked_nodes", "", "", "singly_linked_nodes", "singly_linked_nodesTosingly_linked_nodes", "many"),
    ],
    modelSchema: (Singly_linked_nodesCreateInputSchema as any)
      .partial()
      .or((Singly_linked_nodesUncheckedCreateInputSchema as any).partial()),
    createSchema: Singly_linked_nodesCreateArgsSchema,
    createManySchema: Singly_linked_nodesCreateManyArgsSchema,
    findUniqueSchema: Singly_linked_nodesFindUniqueArgsSchema,
    findSchema: Singly_linked_nodesFindFirstArgsSchema,
    updateSchema: Singly_linked_nodesUpdateArgsSchema,
    updateManySchema: Singly_linked_nodesUpdateManyArgsSchema,
    upsertSchema: Singly_linked_nodesUpsertArgsSchema,
    deleteSchema: Singly_linked_nodesDeleteArgsSchema,
    deleteManySchema: Singly_linked_nodesDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Singly_linked_nodesUncheckedCreateInputSchema>,
    Prisma.Singly_linked_nodesCreateArgs['data'],
    Prisma.Singly_linked_nodesUpdateArgs['data'],
    Prisma.Singly_linked_nodesFindFirstArgs['select'],
    Prisma.Singly_linked_nodesFindFirstArgs['where'],
    Prisma.Singly_linked_nodesFindUniqueArgs['where'],
    Omit<Prisma.Singly_linked_nodesInclude, '_count'>,
    Prisma.Singly_linked_nodesFindFirstArgs['orderBy'],
    Prisma.Singly_linked_nodesScalarFieldEnum,
    Singly_linked_nodesGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations, pgMigrations)
export type Electric = ElectricClient<typeof schema>
